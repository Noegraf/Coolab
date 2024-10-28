"use client"
import { useState } from "react";
import InputPassword from "../InputPassword/page";
import InputText from "../InputText/page";
export default function Register({ handleChange }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const disabled = email !== "" && password !== "" && confirmPassword !== "";
    
    return (
        <form action="" className="w-3/4">
            <div>
                <h1 className="text-3xl font-extrabold text-h1">Ingresar</h1>
            </div>
            <div className="flex flex-col mb-5 mt-5">
                <InputText placeholder="Email" setText={setEmail}/>
                <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                        <InputPassword placeholder="Contraseña" setPassword={setPassword}/>
                    </div>
                    <span
                    className="text-xs"
                    >
                        6 caracteres, una mayúscula, una minúscula, un número y un carácter especial
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <InputPassword placeholder="Confirmar contraseña" setPassword={setConfirmPassword}/>
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
                    Registrarme
                </button>
                <span 
                className="block text-xs mt-3 font-medium cursor-pointer"
                onClick={() => handleChange()}
                >
                    Ingresar
                </span>
            </div>
        </form>
    );
}