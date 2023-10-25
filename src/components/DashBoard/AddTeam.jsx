import React from "react";

const AddTeam = () => {
    return(
        <div className="w-full h-full">
            <form className="flex flex-col" action="">
                <label htmlFor="teamName">Team Name :
                    <input type="text" name="" id="teamName" />
                </label>
                <label htmlFor="teamName">Year :
                    <input type="text" name="" id="teamName" />
                </label>
            </form>
        </div>
    )
}

export default AddTeam