import React, {useState} from "react";
import logo from '../assets/pera-logo.svg'
import user from '../assets/user.png'
import UserOption from "./UserOptions";

const NavBar = () => {

    const [visibility, setVisibility] = useState(false)

    return(
        <header className="relative bg-gradient-to-r from-yellow-500 via-black-500 to-red-800 w-full top-0 left-0 right-0 z-30 flex items-center justify-between">
            <span className="flex items-center gap-2">
                <img className="w-16 ml-[30px] mt-[8px]"  src={logo} alt="logo"/>
                <span>
                    <h2 className="hidden md:block font-semibold">University of Peradeniya</h2>
                    <p className="hidden md:block text-xs">Department of Physical Education</p>
                </span>
            </span>
            <input type="search" className="h-8 w-80 rounded-3xl outline-none p-4" placeholder="Search..." />
            <img onClick={() => setVisibility(!visibility)} src={user} className="bg-white  rounded-full mx-4 cursor-pointer z-50"/>
            {visibility ? <UserOption setIsVisible={setVisibility}/> : null}
        </header>
    )
}

export default NavBar