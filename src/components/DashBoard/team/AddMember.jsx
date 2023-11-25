import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddMember() {

    // const notify = () => toast("Wow so easy!");

    const notify = () => {
        toast.success('Member added successfully!', {
            autoClose: 1000000, // Set the time in milliseconds (e.g., 2000ms = 2 seconds)
        });
    };
    return (
        <div className="p-2">
            <form className="border border-red-500 border-2 rounded-lg p-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ADD MEMBER</div>
                <div>
                    <label for="team_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" />
                </div>
                <div>
                    <label for="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                    <input type="text" id="Nu_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last Name" />
                </div>
                <div>
                    <label for="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Faculty</label>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Faculty" />
                </div>
                <div class="mt-[30px] grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Registration Number</label>
                        <input type="captain_name" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Regitration Number" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Birth Of Date</label>
                        <input type="date" id="start" name="birthday" value="2000-01-01" min="1996-01-01" max="2001-12-31" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div>
                        <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team</label>
                        <input type="team_manager_name" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Team Name" />
                    </div>
                    <div class="mb-6">
                        <label for="First Team Award" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Role</label>
                        <input type="first_team_award" id="first_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Role" />
                    </div>
                </div>
                {/* <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" s />
                    </div>
                </div> */}
                <div>
                    <button onClick={notify} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Member</button>

                    {/* <button onClick={notify}>Notify!</button> */}
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}
