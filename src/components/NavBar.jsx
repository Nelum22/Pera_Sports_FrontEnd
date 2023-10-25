import React from "react";
import logo from '../assets/pera-logo.svg'

const NavBar = () => {
    return(
        <header className="bg-pera-yellow w-full top-0 left-0 right-0 z-50 flex items-center justify-between">
            <img src={logo} alt="logo" className="w-16" />
            <input type="search" className="h-10 w-80 rounded-3xl outline-none p-4" placeholder="Search..." />
            <button className="bg-black text-white px-5 py-1 rounded-2xl mx-4">Login</button>
        </header>
    )
}

export default NavBar