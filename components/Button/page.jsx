"use client";
import { useEffect, useState } from "react";

export default function Button({ text, change, margin }){
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
        className={`${color[0]} text-white py-2 px-4 rounded transition-all duration-300 border-4 border-${color[1]} rounded-lg ${margin} cursor-default`}
        >
            {text}
        </button>
    )
}