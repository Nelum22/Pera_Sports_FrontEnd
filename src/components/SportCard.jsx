import React from "react";

const SportCard = (props) => {
    return(
        <section className="rounded-lg border border-red-700 border-2 bg-transparent-black p-3 font-semibold flex flex-col gap-4 items-center">
            <img className="rounded-lg aspect-square w-11/12 bg-slate-400" src={props.imgURL} alt="DP" />
            <h2 className="text-xl text-white" >{props.tittle.toUpperCase()}</h2>
        </section>
    )
}

export default SportCard;