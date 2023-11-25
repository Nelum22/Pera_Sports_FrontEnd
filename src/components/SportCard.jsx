import React from "react";
import { teamImages } from "../data/teamImageList";
import { useNavigate } from "react-router-dom";

const SportCard = (props) => {

    const name = props.tittle
    const removeWhiteSpace = name.replace(/\s/g, '')
    const navigate = useNavigate()

    const [teamImage, setTeamImage] = React.useState()

    const getImageByName = (imageName) => {

        if (teamImages.hasOwnProperty(imageName)) {
          return teamImages[imageName];
        } else {
          return teamImages['DEFAULTIMAGE'];
        }
    };

    const handleClick = () => {
        const data = {teamName: props.tittle}

        navigate('/team', {state : data})
    }

    React.useEffect(() => {
        setTeamImage(getImageByName(removeWhiteSpace.toUpperCase()))
    },[])

    return(
        <section onClick={handleClick} className="rounded-lg border-red-700 border-2 bg-transparent-black p-3 font-semibold flex flex-col gap-4 items-center">
            <img className="rounded-lg aspect-square w-11/12 bg-slate-400" src={teamImage} alt="DP" />
            <h2 className="text-xl text-white" >{props.tittle.toUpperCase()}</h2>
        </section>
    )
}

export default SportCard;