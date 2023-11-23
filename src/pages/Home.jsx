import React from "react";
import Carousel from "../components/Carousel";
import SportCard from "../components/SportCard";
import  { getAllTeams } from "../services/teamServices"
import { SearchContext } from "../App";

const Home = () => {

    const [teams, setTeams] = React.useState([])
    const searchContext = React.useContext(SearchContext)

    React.useEffect(() => {
        const fetchTeams = async() => {
            try{
                const teamsData = await getAllTeams(searchContext.search)
                setTeams(teamsData);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchTeams()
    },[searchContext.search])


    return(
       
        <div className="flex flex-col items-center w-full bg-gradient-to-r from-red-500 via-black to-yellow-500">
            <Carousel/>
            <div className="w-full flex flex-col items-center my-12 justify-center">
                <div className=" w-10/12 md:w-9/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">

                    {teams.map((team) => 

                        <SportCard key={team.teamId} tittle={team.teamName}/>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Home