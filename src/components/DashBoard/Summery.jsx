import React from "react";
import TeamDetails from "../TeamDetails";
import { getAllTeams } from "../../services/teamServices";

export const RefreshContext = React.createContext()

const Summery = () => {

    const [teams, setTeams] = React.useState([])
    const [change, setChange] = React.useState(true)

    React.useEffect(() => {
        const fetchTeams = async() => {
            try{
                const teamsData = await getAllTeams("");
                setTeams(teamsData);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchTeams()
    },[change])

    return(
        <RefreshContext.Provider value={{change, setChange}}>
        <div className=" w-full h-full flex flex-col items-center bg-black">
            {/* {console.log(teams)} */}
                <section className="w-11/12 h-2/6 flex justify-between items-center">
                    <div className="w-5/12 h-5/6 flex flex-col justify-around bg-white p-4 rounded-md">
                        <p className="text-gray-800 text-xs font-normal">Number of</p>
                        <span className="flex items-end gap-4">
                            <h1 className="text-6xl font-semibold">Teams</h1> 
                            <h1 className="text-6xl font-semibold border-2 p-4 rounded-md border-dashed border-gray-800">{teams.length}</h1>
                        </span> 
                    </div>
                    <div className="w-5/12 h-5/6 rounded-md"></div>
                </section>
                <section className="w-11/12 h-4/6 mb-4 bg-white grid grid-cols-2 gap-4 p-4 overflow-y-scroll">

                {teams.map((team) => 

                    <TeamDetails
                        key = {team.teamId}
                        id = {team.teamId}
                        name = {team.teamName}
                        year = {team.teamYear}
                        count = {team.teamCount}
                        captain = {team.captain}
                        vcaptain = {team.vcaptain}
                        status = {team.teamStatus}
                    />

                )}
                </section>
        </div>
        </RefreshContext.Provider>
    )
}

export default Summery