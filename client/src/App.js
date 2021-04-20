import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from "react";
import PlayerSearch from './components/PlayerSearch';
import PlayerDisplay from './components/PlayerDisplay';
import Scoreboard from './components/Scoreboard';
import TeamCreate from './components/TeamCreate'
import axios from 'axios'


function App() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth()+1;
  let monthWord = '';
  const [searchedPlayer, setSearchedPlayer] = useState("");
  // const [playerName, setPlayerName] = useState("");
  const [playerHr, setPlayerHr] = useState("");
  const [team, setTeam] = useState("")
  const [retrievedTeams, setRetrievedTeams] = useState([])
  const [playerList, setPlayerList] = useState([])

  
  const handleChange = (e) => {
    setSearchedPlayer(e.target.value)
  }
  const handleTeam = e => {
    e.preventDefault()
    setTeam(e.target.value)
    console.log(team)
  }
  const searchPlayer = async (e) => {
    console.log(e.target.value)
    if (searchedPlayer.length === 0) {
      console.log("no name searched")
    } else {
    e.preventDefault()
    const response = await fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='"+ searchedPlayer + "%25'")
    const data = await response.json();
    if (data.search_player_all.queryResults.row.length > 0) {
      
      setPlayerList(data.search_player_all.queryResults.row)
      data.search_player_all.queryResults.row.forEach(player => {
        getData(player.player_id)
      })
    } 
    else {
      let singlePlayerArr = [];
      singlePlayerArr.push(data.search_player_all.queryResults.row)
      console.log("moncada in an array", singlePlayerArr)
       setPlayerList(singlePlayerArr)
       getData(data.search_player_all.queryResults.row.player_id)
    }
  }
  }

  const getData = async (playerId) => {
    const response = await fetch("http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='"+year+"'&player_id="+playerId)
    const data = await response.json();
    if (typeof data.sport_hitting_tm.queryResults.row === 'undefined') {
      console.log("pitcher")
    } else {
      setPlayerHr(data.sport_hitting_tm.queryResults.row.hr)
    }
  }
  const getAllStats = async () =>{
    const response = await fetch("/api/getStats");
    const data = await response.json();
    console.log(data)
    setRetrievedTeams(data)
    
    
  }
  const submitData = () => {
    // console.log("submit", playerName, playerHr, team)
    console.log("submitting")
  }
  const date = () => {
    if (month === 3) {
      monthWord = "March"
    } else if (month === 4) {
      monthWord = "April"
    } else if (month === 5) {
      monthWord = "May"
    } else if (month === 6) {
      monthWord = "June"
    } else if (month === 7) {
      monthWord = "July"
    } else if (month === 8) {
      monthWord = "August"
    } else if (month === 9) {
      monthWord = "September"
    }
  }
  date()
  // Team Creation Page Functions
  const [createdTeam, setCreatedTeam] = useState("")
  const handleTeamInput = e => {
    setCreatedTeam(e.target.value)
  }
  const handleTeamCreateSubmit = async e => {
    e.preventDefault();
    console.log("submit team creation", createdTeam)
    let info = {teamOwner: createdTeam}
    console.log(info)
    axios.post("/api/create-team", {
      teamOwner: createdTeam
    })
    .then(function(response) {
      console.log(response)
    })
    window.location.reload(false);

  }
  const deleteTeam = async (e) => {
    e.preventDefault()
    console.log("delete", e.target.id)
    axios.delete("/api/delete-team/" + e.target.id)
    .then(res => {
      console.log(res);
      
    })
    window.location.reload(false);
  }
  useEffect(() => {
    // fetching data
    getAllStats()
    
  }, [])
  return (
    <div className="App">
      <Router>
      <h4>Dong League</h4>
      <p>Month: {monthWord}</p>
      <Switch>
      <Route exact path="/">
        <Scoreboard />
      </Route>
      <Route exact path="/team-creation">
        <TeamCreate 
          handleTeamInput={handleTeamInput}
          handleTeamCreateSubmit={handleTeamCreateSubmit}
          deleteTeam={deleteTeam}
          retrievedTeams={retrievedTeams}

        />
      </Route>
      <Route exact path="/admin">
      <PlayerSearch
        handleChange={handleChange}
        searchPlayer={searchPlayer}
        handleTeam={handleTeam}
        retrievedTeams={retrievedTeams}
        playerList={playerList}
        // playerName={playerName}
      />
      <PlayerDisplay
        
        
      />
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
