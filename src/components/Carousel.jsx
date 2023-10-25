import React, {useState, useEffect}from "react";
import { corouselData } from "../data/carouselData";

const Carousel = () => {

    const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
    const [currentObject, setCurrentObject] = useState(corouselData[currentObjectIndex]);

    useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentObjectIndex((prevIndex) => (prevIndex + 1) % corouselData.length);
    }, 8000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setCurrentObject(corouselData[currentObjectIndex]);
    }, [currentObjectIndex]);

    return(
        <div className="relative h-90vh w-full flex flex-col items-end justify-center bg-white">
            <img src={currentObject.image} alt="" className="absolute h-full w-full" />
            <section className="relative w-2/3 h-full md:h-auto md:w-6/12 md:aspect-video flex flex-col justify-center gap-5 md:mr-16 z-40 bg-transparent-black text-white overflow-hidden">
                <h2 className="text-2xl font-semibold ml-8 w-3/6">"{currentObject.tittle}"</h2>
                <p className="ml-8 h-2/6 w-5/6 overflow-hidden">{currentObject.description}</p>
            </section>
            <section className="absolute bottom-0 w-full h-fit py-4 z-50 gap-4 flex justify-center">
                <span
                    onClick={() => setCurrentObject(corouselData[0])} 
                    className="w-4 h-4 aspect-square rounded-full border-2 border-white cursor-pointer hover:bg-pera-yellow"/>
                <span
                    onClick={() => setCurrentObject(corouselData[1])} 
                    className="w-4 h-4 aspect-square rounded-full border-2 border-white cursor-pointer hover:bg-pera-yellow"/>
                <span
                    onClick={() => setCurrentObject(corouselData[2])} 
                    className="w-4 h-4 aspect-square rounded-full border-2 border-white cursor-pointer hover:bg-pera-yellow"/>
            </section>
        </div>
    )
}

export default Carousel