import React from 'react'

export default function UpdateMember() {
  return (
    <div className="p-2">
            <form className="border border-red-500 border-2 rounded-lg p-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">UPDATE MEMBER</div>
                {/* <div className="grid gap-6 mb-6 md:grid-cols-2 "> */}
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
                <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Registration Number</label>
                    <input type="captain_name" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Regitration Number" />
                </div>
                <div>
                    <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Birth Of Date</label>
                    <input type="coach_name" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Birth Of Date" />
                </div>
                
                <div>
                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team</label>
                    <input type="team_manager_name" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Team Name" />
                </div>
                {/* </div> */}
                <div class="mb-6">
                    <label for="First Team Award" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Role</label>
                    <input type="first_team_award" id="first_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Role" />
                </div>
              
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Member</button>
            </form>
        </div>
  )
}
