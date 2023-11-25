import React from "react";
import { addTeam } from "../../services/teamServices";

const AddTeam = () => {

    const teamName = React.useRef()
    const teamCount = React.useRef()
    const teamYear = React.useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
            teamName: teamName.current.value,
            teamCount: teamCount.current.value,
            teamYear: teamYear.current.value
        };
    
        try {
            await addTeam(data);
            console.log("Team added successfully");
        } catch (error) {
            console.log("Error adding team:", error);
        }
    };


    return (
        <div className="grid place-items-center p-2 w-full h-full">
            <form onSubmit={handleSubmit} className="w-10/12 border-red-500 border-2 rounded-lg p-5">
            <div className="block mb-2 text-2xl font-medium text-gray-900 dark:text-black">Add Team</div>
                <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                    <div>
                        <label htmlFor="team_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team Name</label>
                        <input ref={teamName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Name"  />
                    </div>
                    <div>
                        <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team Count</label>
                        <input ref={teamCount} type="number" id="Nu_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Count" />
                    </div>
                    <div>
                        <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Team Year</label>
                        <input ref={teamYear} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Year" />
                    </div>
                </div>
                <section className="flex gap-4">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Team</button>
                    <button type="reset"
                        className="text-blue-700 border-2 border-blue-700 px-5 py-2 font-medium rounded-lg"
                    >Reset</button>
                </section>
            </form>
        </div>
    )
}

export default AddTeam