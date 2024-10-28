"use client"
import { useState } from "react";
import "./styles.css"
export default function InputPassword({ placeholder, setPassword, getClick }) {
    const [visible, setVisible] = useState("password");
    function handleClick() {
        if(placeholder === "Contraseña" && getClick !== " "){
            getClick();
        }
    }
    return(
        <div className="flex justify-between items-center w-full password-container">
            <input 
                className="outline-none  pt-3 pb-3 pl-2 pr-2 w-full" 
                placeholder={placeholder} 
                type={visible}
                onFocus={handleClick}
                onBlur={handleClick}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <img
                className="w-5 h-5 cursor-pointer eye" 
                src="/images/remove_red_eye.png" 
                alt=""
                onClick={() => setVisible(visible === "password" ? "text" : "password")} 
            />
        </div>
    )
}