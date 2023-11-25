import React, { useState } from 'react'
import Members from '../components/DashBoard/team/Members'
import AddMember from '../components/DashBoard/team/AddMember'
import DeleteTeam from '../components/DashBoard/DeteleTeam'


export default function LeaderDashboard() {

    const [compenent, setComponent] = useState("members")

    return (
        <div className="w-full h-90vh flex bg-gradient-to-r from-yellow-500 via-black-500 to-red-800">
            <div className="w-3/12 h-full flex flex-col text-lg items-center gap-3 bg-yellow-500">
                <span
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 mt-2 cursor-pointer"
                    onClick={() => setComponent("members")}
                >
                    Team Members</span>
                <span
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 cursor-pointer"
                    onClick={() => setComponent("addmember")}
                >
                    Add 
                </span>
                {/* <span
                    className="w-10/12 py-3 text-center border-b-2 rounded-t-md border-black hover:bg-yellow-100 cursor-pointer"
                    onClick={() => setComponent("updatemember")}
                >
                    Update Team</span> */}
            </div>
            <div className="w-9/12 h-full">
                {(compenent === "members") ? <Members /> : (compenent === "addmember") ? <AddMember /> : (compenent === "updatemember") ? <UpdateMember /> : <DeleteTeam />}
            </div>
        </div>
    )
}
