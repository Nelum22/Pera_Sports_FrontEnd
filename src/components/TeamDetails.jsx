import React from "react";
import UpdateTeamButton from "./DashBoard/UpdateTeamButton";
import DeleteTeamButton from "./DashBoard/DeleteTeamButton";

const TeamDetails = (props) => {
    

    return(
        <div className="p-4 border-red-500 border-2 rounded-md h-fit">
            <section className="w-full flex justify-between">
                <h2>{props.name}</h2>
                <p>{props.year}</p>
                <hr className="w-2"/>
            </section>
            <br/>
            <section>
                <p>Captain : {props.captain}</p>
                <p>Vice-captain: {props.vcaptain}</p>
                <p>Team Count: {props.count}</p>
            </section>
            <section className="py-2 flex justify-end gap-4 ">
                <UpdateTeamButton id={props.id} name={props.name} year={props.year} count={props.count} status={props.status}/>
                <DeleteTeamButton id={props.id}/>
            </section>
            <></>
        </div>
    )
}

export default TeamDetails