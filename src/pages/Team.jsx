import React from "react";
import MainBanner from "../components/MainBanner";
import PlayerCard from "../components/PlayerCard";

const Team = () => {
    return(
        <div className="flex flex-col items-center w-full bg-gradient-to-r from-red-500 via-black to-yellow-500">
            <MainBanner/>
            <div className="w-full bg-black flex flex-col items-center my-12 justify-center">
                <div className=" w-10/12 md:w-9/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                    <PlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
                </div>
            </div>
        </div>
    )
}

export default Team