import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return(
        <div className="w-full">
            <NavBar/>
            {children}
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout