import React, {useState} from "react";
import Summery from "../components/DashBoard/Summery";
import AddTeam from "../components/DashBoard/AddTeam";
import UpdateTeam from "../components/DashBoard/UpdateTeam"
import DeleteTeam from "../components/DashBoard/DeteleTeam"

const AdminDashBoard = () => {

    const [compenent, setComponent] = useState("summery")

    return(
        <div className="w-full h-90vh flex">
            <div className="w-3/12 h-full flex flex-col text-lg items-center gap-3 bg-white">
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
                <span 
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 cursor-pointer"
                    onClick={() => setComponent("updateteam")}
                >
                        Update Team</span>
                <span 
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 cursor-pointer"
                    onClick={() => setComponent("deleteteam")}
                >
                        Delete Team</span>
            </div>
            <div className="w-9/12 h-full">
                {(compenent === "summery") ? <Summery/> : (compenent === "addteam") ?  <AddTeam/> : (compenent === "updateteam") ? <UpdateTeam/> : <DeleteTeam/>}
            </div>
        </div>
    )
}

export default AdminDashBoard