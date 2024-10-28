"use client"
import { useState } from "react";
import InputPassword from "../InputPassword/page";
import InputText from "../InputText/page";
export default function Register({ handleChange }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [verification, setVerification] = useState(false);

    const mayuscula = /[A-Z]/.test(password);
    const minCaracteres = password.length >= 6;
    const minuscula = /[a-z]/.test(password);
    const numero = /\d/.test(password);
    const especial = /[^a-zA-Z0-9]/.test(password);
    const verificado = mayuscula && minCaracteres && minuscula && numero && especial;

    const disabled = email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword && verificado;
    
    function getClick(){
        setVerification(!verification);
    }

    return (
        <form action="" className="w-3/4 animation">
            <div>
                <h1 className="text-3xl font-extrabold text-h1">Ingresar</h1>
            </div>
            <div className="flex flex-col mb-5 mt-5">
                <InputText placeholder="Email" setText={setEmail}/>
                <div className="mb-3">
                    <div className="flex justify-between items-center">
                        <InputPassword getClick={getClick} placeholder="Contraseña" setPassword={setPassword}/>
                    </div>
                    {verification && 
                        <>
                            <div className="mt-1 message-verification">
                                <span className={`text-xs ${minCaracteres ? "text-verificationColor" : ""}`}>
                                    6 caracteres,{" "} 
                                </span>
                                <span className={`text-xs ${mayuscula ? "text-verificationColor" : ""}`}>
                                    una mayúscula,{" "} 
                                </span>
                                <span className={`text-xs ${minuscula ? "text-verificationColor" : ""}`}>
                                    una minúscula, {" "}
                                </span>
                                <span className={`text-xs ${numero ? "text-verificationColor" : ""}`}>
                                    un número {" "}
                                </span>
                                <span className="text-xs">
                                    y {" "}
                                </span>
                                <span className={`text-xs ${especial ? "text-verificationColor" : ""}`}>
                                    un carácter especial
                                </span>
                            </div>
                        </>
                    }
                    
                    
                </div>

                <div className="flex justify-between items-center">
                    <InputPassword getClick={getClick} placeholder="Confirmar contraseña" setPassword={setConfirmPassword}/>
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