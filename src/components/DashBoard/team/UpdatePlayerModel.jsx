import React from "react";
import { editPlayer } from "../../../services/playersServices";
// import { RefreshContext } from "./Summery";

const UpdatePlayerModel = (props) => {

    const firstName = React.useRef()
    const lastName = React.useRef()
    const birthDay = React.useRef()
    const faculty = React.useRef()
    const regNo = React.useRef()
    const roleName = React.useRef()
    const status = React.useRef()
    // const ChangeContext = React.useContext(RefreshContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
            playerId: props.id,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            birthDay: birthDay.current.value,
            faculty: faculty.current.value,
            regNo: regNo.current.value,
            role: roleName.current.value,
            status : status.current.value
        };
    
        try {
            await editPlayer(data);
            console.log("Player added successfully");
            props.setVisibility(false)
            // ChangeContext.setChange(!ChangeContext.change)
        } catch (error) {
            console.log("Error adding team:", error);
        }
    };

    return(
        <div onClick={(e) => {e.stopPropagation()}} className="grid place-items-center p-2 w-1/2">
            <form onSubmit={handleSubmit} className="w-10/12 bg-white border-red-500 border-2 rounded-lg p-5">
                <div className="block mb-2 text-2xl font-medium text-gray-900 dark:text-black">Update Team</div>
                <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                    <div>
                        <label htmlFor="team_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                        <input ref={firstName} defaultValue={props.firstName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Name"  />
                    </div>
                    <div>
                        <label htmlFor="team_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                        <input ref={lastName} defaultValue={props.lastName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Name"  />
                    </div>
                    <div>
                        <label htmlFor="team_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Birth Day</label>
                        <input ref={birthDay} defaultValue={props.birthDay} type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Name"  />
                    </div>
                    <div>
                        <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Faculty</label>
                        <input ref={faculty} defaultValue={props.faculty} type="text" id="Nu_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Count" />
                    </div>
                    <div>
                        <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Registration No</label>
                        <input ref={regNo} defaultValue={props.regNo} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Year" />
                    </div>
                    <div>
                        <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Role</label>
                            <select ref={roleName} defaultValue={props.roleName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" name="status" id="status">
                                <option selected value="Team Member">Team Member</option>
                                <option value="Vice Captain">Vice Captain</option>
                                <option value="Captain">Captain</option>
                            </select>
                    </div>
                    <div>
                        <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Status</label>
                            <select ref={status} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" name="status" id="status">
                                <option selected value="ACTIVE">Active</option>
                                <option value="INACTIVE">INACTIVE</option>
                            </select>
                    </div>
                </div>
                <section className="flex gap-4">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Team</button>
                    <button type="reset"
                        className="text-blue-700 border-2 border-blue-700 px-5 py-2 font-medium rounded-lg"
                    >Reset</button>
                </section>
            </form>
        </div>
    )
}

export default UpdatePlayerModel