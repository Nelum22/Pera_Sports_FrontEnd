import React from "react";
import LoginCard from "../components/LoginCard";
import sportBanner from '../assets/sports banner.png'

const Login = () => {
    return(
        <div className="w-full h-fit md:h-screen flex flex-col md:flex-row">
            <section className="h-full w-1/2 grid place-items-center">
                <img className="border border-yellow-500 border-[3px] w-[500px] h-[500px] aspect-auto rounded-full" 
                src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-sports-team-vector-png-image_6884087.png" 
                alt="sports" />
            </section>
            <section className="grid place-items-center h-full w-1/2">
                <LoginCard/>
            </section>
        </div>
    )
}

export default Login