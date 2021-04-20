export default function PlayerSearch(props) {
    const displayTeamRadio = props.retrievedTeams.map((team, index) => {
        return (
            <div key={index}>
            <br/>
            <input type="radio" name="team" value={team.teamOwner} onChange={props.handleTeam}></input>
            <label>{team.teamOwner}</label>
            <br/>
            </div>
        )
    })
    console.log("props", props.playerList)
    const displayPotentialPlayers = props.playerList.map((player, index ) => {
        if (props.playerList.length === 0) {
            return (
            <div key={index}>
                <p>{player.name_display_first_last}</p>
            </div>
            )
        }
        else if (player.position === "P") {
            return (
                <div key={index}></div>
            )
        } else {
        return(
            <div key={index}>
                <p>{player.name_display_first_last}</p><button>Select</button>
            </div>
        )
        }
    })
    return (
        <>
        <p>Search Players</p>
        <input onChange={props.handleChange}></input>
        <button onClick={props.searchPlayer}>Search</button>
        <br/>
        {displayPotentialPlayers}
        {displayTeamRadio}
        <br/>
        </>
    )
}