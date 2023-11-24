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
            <section>
                <p>Coach : Samtha</p>
                <p>Captain : Dasum samnaka</p>
                <p>Vice-captain: king mendis</p>
                <p>Number of Players: 25</p>
            </section>
            <section className="py-2 flex justify-end gap-4 ">
                <UpdateTeamButton id={props.id}/>
                <DeleteTeamButton id={props.id}/>
            </section>
            <></>
        </div>
    )
}

export default TeamDetails