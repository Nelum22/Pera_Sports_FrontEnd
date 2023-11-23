import React, {useState} from "react";
import ModelOverlay from "../ModelOverLay";
import { deleteTeam } from "../../services/teamServices";
import { RefreshContext } from "./Summery";

const DeleteTeamButton = (props) => {
    const changeContext = React.useContext(RefreshContext)
    const [isVisible, setIsVisible] = useState(false)

    const handleDelete = async() => {
        try{
            await deleteTeam(props.id)
            setIsVisible(true)
            changeContext.setChange(!changeContext.change)
        }
        catch(error){
            console.log(error)
        }
    }
    
    return(
        <>                  
            <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                onClick={handleDelete}
            >
                Delete Team
            </button>
            {/* <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
            </ModelOverlay> */}
        </>
    )
}

export default DeleteTeamButton