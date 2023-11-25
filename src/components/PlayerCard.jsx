import React from "react";

const PlayerCard = (props) => {
    return(
        <section className="rounded-lg border-yellow-600 border-[2px] bg-transparent-black p-3 font-semibold flex flex-col gap-4 items-center">
            <p className="text-white">{props.title.toUpperCase()}</p>
            <img className="aspect-square w-11/12 bg-slate-400 rounded-lg" src={props.imgURL} alt="DP" />
            <h2 className="text-xl text-white" >{props.name.toUpperCase()}</h2>
        </section>
    )
}

export default PlayerCard