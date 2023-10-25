import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <div className="w-full">
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout