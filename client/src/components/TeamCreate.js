// import {useEffect} from 'react'

export default function TeamCreate(props) {
    console.log("team", props.retrievedTeams)
    const teamDisplay = props.retrievedTeams.map((team, index)=> {
        return (
            <div key={team._id}>
                <p>{index + 1}: {team.teamOwner}</p>
                <button onClick={props.deleteTeam} id={team._id}>Delete</button>
            </div>
        )
    })
    return (
        <>
        <p>Team Create</p>
        <input placeholder="Put Team Name Here" onChange={props.handleTeamInput}></input>
        <button onClick={props.handleTeamCreateSubmit}>Create</button>
        <br></br>
        {teamDisplay}
        </>
    )
}