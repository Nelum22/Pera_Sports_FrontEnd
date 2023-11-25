import React from "react";
import MainBanner from "../components/MainBanner";
import PlayerCard from "../components/PlayerCard";
import { useLocation } from "react-router-dom";
import { getPlayers } from "../services/playersServices";

const Team = () => {

    const location = useLocation();
    const { state } = location;
    const [players, setPlayers] = React.useState([])

    React.useEffect(() => {
        const fetchTeams = async() => {
            try{
                const teamsData = await getPlayers(state.teamName)
                setPlayers(teamsData);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchTeams()
    },[])

    return(
        <div className="flex flex-col items-center w-full bg-gradient-to-r from-red-500 via-black to-yellow-500">
            <MainBanner team={state.teamName}/>
            <div className="w-full  flex flex-col items-center my-12 justify-center">
                <div className=" w-10/12 md:w-9/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {players.map((player) => 
                        <PlayerCard key={player.playerId} title={player.roleName} imgURL="www.sample.com/dps/dp.jpg" name={player.firstName} />
                    )}
                    {/* <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" /> */}
                </div>
            </div>
        </div>
    )
}

export default Team