import React from "react";

const TeamDetails = () => {
    return(
        <div className="p-4 border-2 border-gray-800 rounded-md">
            <section className="w-full flex justify-between">
                <h2>Cricket</h2>
                <p>2022/2023</p>
                <hr className="w-2"/>
            </section>
            <section>
                <p>Coach : Samtha</p>
                <p>Captain : Dasum samnaka</p>
                <p>Vice-captain: king mendis</p>
                <p>Number of Players: 25</p>
            </section>
        </div>
    )
}

export default TeamDetails