"use client"
import "./style.css"
import { useState } from "react";
import InputPassword from "../InputPassword/page";
import InputText from "../InputText/page";
import Link from "next/link";
export default function Login({ handleChange }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const disabled = email !== "" && password !== "";

    return(
        <form action="" className="w-3/4 animation">
            <div>
                <h1 className="text-3xl font-extrabold text-h1">Ingresar</h1>
            </div>
            <div className="flex flex-col mb-5 mt-5">
                <InputText placeholder="Email" setText={setEmail}/>

                <div className="flex justify-between items-center">
                    <InputPassword getClick=" "placeholder="Contraseña" setPassword={setPassword}/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-evenly mb-5 w-2/3">
                    <img className="cursor-pointer max-sm:w-9 max-sm:h-9" src="/images/logos/github.png" alt="" />
                    <img className="cursor-pointer max-sm:w-9 max-sm:h-9" src="/images/logos/google.png" alt="" />
                    <img className="cursor-pointer max-sm:w-9 max-sm:h-9" src="/images/logos/linkedin.png" alt="" />
                </div>
            </div>
            
            <div className="flex flex-col items-center">
                <Link 
                href="/firstTime"
                >
                    <button 
                    type="submit"
                    disabled={!disabled}
                    className={`pt-3 pb-3 pl-4 pr-4 rounded-lg transition-all duration-500 ${disabled ? "border-4 border-borderSubmit" : "border-4 border-containerSubmit"} ${disabled ? "bg-logo" : "bg-containerSubmit"} text-colorSubmit`}
                    >
                        Ingresar
                    </button>
                </Link>
                
                <span 
                className="block text-xs mt-3 font-medium cursor-pointer"
                onClick={() => handleChange()}
                >
                    Registrarme
                </span>
            </div>
        </form>
    )
}