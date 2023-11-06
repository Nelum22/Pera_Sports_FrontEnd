import React from "react";
import LoginCard from "../components/LoginCard";
import sportBanner from '../assets/sports banner.png'

const Login = () => {
    return(
        <div className="w-full h-fit md:h-screen flex flex-col md:flex-row">
            <section className="h-full w-1/2 grid place-items-center">
                <img className="w-full aspect-auto" src={sportBanner} alt="sports" />
            </section>
            <section className="grid place-items-center h-full w-1/2">
                <LoginCard/>
            </section>
        </div>
    )
}

export default Login