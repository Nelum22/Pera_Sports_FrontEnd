import React from "react";
import ReactDOM from "react-dom";
import close from '../assets/Close.svg'
import { useNavigate } from "react-router-dom";

const UserOption = (props) => {

    const navigate = useNavigate()
    const role = localStorage.getItem("role")

    const logout = () => {
        localStorage.removeItem("role")
        navigate('/login')
    }

    const Content = () => (
        <div className="absolute top-0 right-0 h-fit bg-white drop-shadow-md w-screen sm:w-2/12 z-40 rounded-sm">
            <div className="w-full h-full flex flex-col items-center">
                <section className="w-11/12 flex justify-between items-center justify-end my-2 p-1 border-b border-gray-400">
                    <p>{role}</p>
                    <img src={close} alt="close btn" className="cursor-pointer p-1 rounded-sm" onClick={() => props.setIsVisible(false)}/>
                </section>
                <section className="w-11/12 flex-1 flex flex-col items-center my-4">
                    {(role) ? null : 
                    <button onClick={() => navigate('/login')} className="flex items-center justify-center pb-2 border-b-2 border-gray-600 w-3/6">
                        Login
                    </button>}
                    <button onClick={logout} className="flex items-center gap-2">
                        Logout
                    </button>
                </section>
            </div>
        </div>
    )

    return(
        <>
            {ReactDOM.createPortal(<Content/>, document.getElementById('model-root'))}
        </>
    )
}

export default UserOption