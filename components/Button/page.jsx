"use client";
import { useEffect, useState } from "react";

export default function Button({ text, change, setChange, margin }){
    const [color, setColor] = useState(["bg-containerSubmit", "containerSubmit"]);

    useEffect(() => {
        if(change === text){
            setColor(["bg-logo", "borderSubmit"]);
        }

        if(change !== text){
            setColor(["bg-containerSubmit", "containerSubmit"]);
        }

    },[change])
    return(
        <button
        className={`${color[0]} text-white py-2 px-4 rounded transition-all duration-300 border-4 border-${color[1]} rounded-lg ${margin}`}
        onClick={() =>{ 
                setChange[0](text);
                if(setChange[1] !== ""){
                    setChange[1](true);
                }
            }
        }
        >
            {text}
        </button>
    )
}