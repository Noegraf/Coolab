"use client"
import { useState } from "react";

export default function Login(){
    const [visible, setVisible] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const disabled = email !== "" && password !== "";

    return(
        <form action="" className="w-3/4">
            <div>
                <h1 className="text-3xl font-extrabold text-h1">Ingresar</h1>
            </div>
            <div className="flex flex-col mb-5 mt-5">
                <input 
                className="outline-none border-b border-b-border mb-3 pt-3 pb-3 pl-2 pr-2" 
                placeholder="Email" 
                type="text"
                onChange={(e) => setEmail(e.target.value)} 
                />
                <div className="flex justify-between items-center">
                    <input 
                    className="outline-none border-b border-b-border pt-3 pb-3 pl-2 pr-2 w-full" 
                    placeholder="Contraseña" 
                    type={visible} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <img 
                    className="w-5 h-5 cursor-pointer" 
                    src="/images/remove_red_eye.png" 
                    alt=""
                    onClick={() => setVisible(visible === "password" ? "text" : "password")} 
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-evenly mb-5 w-2/3">
                    <img className="cursor-pointer" src="/images/logos/github.png" alt="" />
                    <img className="cursor-pointer" src="/images/logos/google.png" alt="" />
                    <img className="cursor-pointer" src="/images/logos/linkedin.png" alt="" />
                </div>
            </div>
            
            <div className="flex flex-col items-center">
                <button 
                type="submit"
                disabled={!disabled}
                className={`pt-3 pb-3 pl-4 pr-4 rounded-lg transition-all duration-500 ${disabled ? "border-4 border-borderSubmit" : "border-4 border-containerSubmit"} ${disabled ? "bg-logo" : "bg-containerSubmit"} text-colorSubmit`}
                >
                    Ingresar
                </button>
                <span 
                className="block text-xs mt-3 font-medium cursor-pointer"
                >
                    Registrarme
                </span>
            </div>
        </form>
    )
}