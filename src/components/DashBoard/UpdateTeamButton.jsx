import React, {useState} from "react";
import ModelOverlay from "../ModelOverLay";
import UpdateTeamModel from "./UpdateTeamModel";

const UpdateTeamButton = (props) => {

    const [isVisible, setIsVisible] = useState(false)
    return(
        <>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setIsVisible(true)}
            >
                Update Team
            </button>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <UpdateTeamModel id={props.id} setVisibility={setIsVisible}/>
            </ModelOverlay>
        </>
    )
}

export default UpdateTeamButton