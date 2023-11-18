import React from "react";

const UpdateTeam = () => {
    return(
            <div className="p-2">
                <form className="border border-red-500 border-2 rounded-lg p-2">
                    <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Update Team</div>
                <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                    <div>
                        <label for="team_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team ID</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team ID"  />
                    </div>
                    <div>
                        <label for="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Number of Players</label>
                        <input type="text" id="Nu_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of players" />
                    </div>
                    <div>
                        <label for="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team Name</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Name" />
                    </div>
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Captain Name</label>
                        <input type="captain_name" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Captain Name" />
                    </div>
                    <div>
                        <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Coach Name</label>
                        <input type="coach_name" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coach Name" />
                    </div>
                    <div>
                        <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team Manager Name</label>
                        <input type="team_manager_name" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Manager Name"  />
                    </div>
                </div>
                <div class="mb-6">
                    <label for="First Team Award" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Team Award</label>
                    <input type="first_team_award" id="first_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Team Award"  />
                </div>
                <div class="mb-6">
                    <label for="Second Team Award" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Second Team Award</label>
                    <input type="second_team_award" id="second_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Second Team Award"  />
                </div>
                <div class="mb-6">
                    <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Third Team Award</label>
                    <input type="third_team_award" id="third_team_award" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Third Team Award"  />
                </div>
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"s />
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-black">terms and conditions</a>.</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Team</button>
            </form>
            </div>
    )
}

export default UpdateTeam