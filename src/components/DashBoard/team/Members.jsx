import React from 'react'
import PlayerCard from '../../PlayerCard'

export default function Members(props) {
    return (
        <div className='bg-gradient-to-r from-red-500 via-black to-yellow-500'>
            <div className="w-full  flex flex-col items-center  justify-center">
                <div className=" w-10/12 md:w-9/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
