import React, {useState} from "react";
import Summery from "../components/DashBoard/Summery";
import AddTeam from "../components/DashBoard/AddTeam";
import { useNavigate } from "react-router";

const AdminDashBoard = () => {

    const [compenent, setComponent] = useState("summery")
    const role = localStorage.getItem("role")
    const navigate = useNavigate()

    React.useEffect(() => {
        if(role != 'Admin' || role == "" || role == undefined){
            navigate('/login')
            localStorage.removeItem('role')
        }
    },[])

    return(
        <div className="w-full h-90vh flex">
            <div className="w-3/12 h-full flex flex-col text-lg items-center gap-3 bg-yellow-500">
                <span 
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 mt-2 cursor-pointer"
                    onClick={() => setComponent("summery")}
                >
                        Summery</span>
                <span 
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 cursor-pointer"
                    onClick={() => setComponent("addteam")}
                >
                        Add Team</span>
            </div>
            <div className="w-9/12 h-full">
                {(compenent === "summery") ? <Summery/> : <AddTeam/>}
            </div>
        </div>
    )
}

export default AdminDashBoard