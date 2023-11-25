import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPlayer } from '../../../services/playersServices';


export default function AddMember() {

    const team = localStorage.getItem("role")

    const firstName = React.useRef()
    const lastName = React.useRef()
    const faculty = React.useRef()
    const regNo = React.useRef()
    const birthDay = React.useRef()
    const role = React.useRef()
    const status = React.useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
            firstName : firstName.current.value,
            lastName : lastName.current.value,
            faculty : faculty.current.value,
            regNo : regNo.current.value,
            birthDay :birthDay.current.value,
            playerRole : role.current.value,
            status : status.current.value,
            team: team
        }
    
        try {
            await addPlayer(data);
            console.log("Team added successfully");
        } catch (error) {
            console.log("Error adding team:", error);
        }
    };

   
    return (
        <div className="p-2">
            <form onSubmit={handleSubmit} className="border-red-500 border-2 rounded-lg p-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ADD MEMBER</div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                    <input ref={firstName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" />
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                    <input ref={lastName} type="text" id="Nu_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last Name" />
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Faculty</label>
                    <input ref={faculty} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Faculty" />
                </div>
                <div class="mt-[30px] grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Registration Number</label>
                        <input ref={regNo} type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Regitration Number" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Birth Of Date</label>
                        <input ref={birthDay} type="date" name="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="mb-6">
                        <label for="First Team Award" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Role</label>
                        <select ref={role} type="first_team_award" id="first_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Role" >
                            <option selected value="Team Member">Team Member</option>
                            <option value="Vice Captain">Vice Captain</option>
                            <option value="Captain">Captain</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="First Team Award" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Status</label>
                        <select ref={status} type="first_team_award" id="first_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Role" >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">In Active</option>
                        </select>
                    </div>
                </div>
                {/* <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" s />
                    </div>
                </div> */}
                <div className='flex gap-5'>
                    <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Member</button>
                    <button type='reset' className='border-2 text-blue border-blue-700 py-2 rounded-lg bg-white px-5'>Clear</button>
                    {/* <button onClick={notify}>Notify!</button> */}
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}
