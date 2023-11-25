import React, {useState} from "react";
import ModelOverlay from "../../ModelOverLay";
import UpdatePlayerModel from "./UpdatePlayerModel";
// import UpdatePlayerModel from "./UpdatePlayerModel";

const UpdatePlayerButton = (props) => {

    const [isVisible, setIsVisible] = useState(false)
    return(
        <>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setIsVisible(true)}
            >
                Update Team
            </button>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <UpdatePlayerModel
                    id={props.playerId}
                    firstName={props.firstName}
                    lastName={props.lastName}
                    birthDay={props.birthDay}
                    faculty={props.faculty}
                    regNo={props.regNo}
                    roleName={props.roleName}
                    status={props.status}
                    setVisibility={setIsVisible}
                />
                {/* <UpdateTeamModel id={props.id} name={props.name} year={props.year} count={props.count} status={props.status} setVisibility={setIsVisible}/> */}
            </ModelOverlay>
        </>
    )
}

export default UpdatePlayerButton