import React from "react";

const PlayerCard = (props) => {
    return(
        <section className="bg-white p-3 font-semibold flex flex-col gap-4 items-center">
            <p>{props.title.toUpperCase()}</p>
            <img className="aspect-square w-11/12 bg-slate-400" src={props.imgURL} alt="DP" />
            <h2 className="text-xl" >{props.name.toUpperCase()}</h2>
        </section>
    )
}

export default PlayerCard