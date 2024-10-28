"use client"
import { useState } from "react";
export default function InputPassword({ placeholder, setPassword }) {
    const [visible, setVisible] = useState("password");

    return(
        <>
            <input 
                className="outline-none border-b border-b-border pt-3 pb-3 pl-2 pr-2 w-full" 
                placeholder={placeholder} 
                type={visible} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <img 
                className="w-5 h-5 cursor-pointer" 
                src="/images/remove_red_eye.png" 
                alt=""
                onClick={() => setVisible(visible === "password" ? "text" : "password")} 
            />
        </>
    )
}