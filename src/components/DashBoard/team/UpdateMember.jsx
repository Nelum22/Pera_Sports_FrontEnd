import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';

export default function UpdateMember() {

    // const [checked, setChecked] = useState(false);
    // const handleChange = nextChecked => {
    //     setChecked(nextChecked);
    // };

    const notify = () => {
        toast.success('Member updated successfully!', {
            autoClose: 1000000, // Set the time in milliseconds (e.g., 2000ms = 2 seconds)
        });
    };

    return (
        <div className="p-2">
            <form className="border border-red-500 border-2 rounded-lg p-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">UPDATE MEMBER</div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                    <input type="text" id="Nu_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last Name" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Faculty</label>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Faculty" />
                </div>
                <div class="mt-[30px] grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Registration Number</label>
                        <input type="captain_name" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Regitration Number" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Birth Of Date</label>
                        <input type="date" id="start" name="birthday" value="2000-01-01" min="1996-01-01" max="2001-12-31" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team</label>
                        <input type="team_manager_name" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Team Name" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Role</label>
                        <input type="first_team_award" id="first_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Role" />
                    </div>
                </div>
                <div>
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Player state</span>
                    </label>
                </div>

                {/* <div>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                        Palyer state
                        <input
                            type="checkbox"
                            onChange={handleChange}
                            checked={checked}
                            className="form-checkbox h-6 w-6 text-indigo-600 ml-[30px]"
                        />
                        <span className={`ml-[50px] ${checked ? 'font-bold' : ''}`}> {checked ? 'Active' : 'Deactive'}</span>.
                    </label>
                </div> */}
                <div>
                    <button onClick={notify} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Member</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}
