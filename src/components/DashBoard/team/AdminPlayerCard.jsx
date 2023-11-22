import React from 'react'

export default function (props) {
    return (
        <div>
            <section className="rounded-lg border border-yellow-600 border-[2px] bg-transparent-black p-3 font-semibold flex flex-col gap-4 items-center">
                <p className="text-white">{props.title.toUpperCase()}</p>
                <img className="aspect-square w-11/12 bg-slate-400 rounded-lg" src={props.imgURL} alt="DP" />
                <h2 className="text-xl text-white" >{props.name.toUpperCase()}</h2>
                <button className="bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 flex items-center justify-center rounded-full p-2 text-3xl text-white transition duration-200 hover:cursor-pointer dark:text-white">
                    <MdChevronRight />
                </button>
            </section>
        </div>
    )
}
