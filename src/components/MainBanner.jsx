import React from "react";
import banner from '../assets/cricket.jpg'

const MainBanner = () => {

    return(
        <main className="relative w-10/12 h-80vh flex flex-col items-center justify-end bg-slate-400 mt-10">
            <img src={banner} alt="banner"  className="absolute w-full h-full object-cover" />
            <section className="z-20 w-full bg-transparent-black" >
                <h1 className=" p-32 text-5xl font-bold text-white">Cricket Team (2023)</h1>
            </section>
        </main>
    )
}

export default MainBanner