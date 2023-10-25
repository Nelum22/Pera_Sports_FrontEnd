import React from "react";

const SportCard = (props) => {
    return(
        <section className="bg-white p-3 font-semibold flex flex-col gap-4 items-center">
            <img className="aspect-square w-11/12 bg-slate-400" src={props.imgURL} alt="DP" />
            <h2 className="text-xl" >{props.tittle.toUpperCase()}</h2>
        </section>
    )
}

export default SportCard