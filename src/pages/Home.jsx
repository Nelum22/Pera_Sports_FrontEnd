import React from "react";
import Carousel from "../components/Carousel";
import SportCard from "../components/SportCard";
import  { getAllTeams } from "../services/teamServices"
import { SearchContext } from "../App";

const Home = () => {

    const [teams, setTeams] = React.useState([])
    const searchContext = React.useContext(SearchContext)
    const [year, setYear] = React.useState('2023')

    React.useEffect(() => {
        const fetchTeams = async() => {
            try{
                const teamsData = await getAllTeams(searchContext.search,year)
                setTeams(teamsData);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchTeams()
    },[searchContext.search, year])


    return(
       
        <div className="flex flex-col items-center w-full bg-gradient-to-r from-red-500 via-black to-yellow-500">
            <Carousel/>
            {console.log(year)}
            <div className="w-full flex flex-col items-center my-12 justify-center">
                <div className="w-10/12 py-5 flex justify-end">
                    <select className="w-40 text-2xl bg-transparent border-2 border-black rounded-lg" onChange={(e) => setYear(e.target.value)} name="year" id="year">
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option selected value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                    </select>
                </div>
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