"use client"
import Data from "../../data/roles.json";
import Dropdown from "../Dropdown/page";
import { useEffect, useState } from "react";
import "./styles.css";
export default function Welcome() {
    const [role, setRole] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [disabledButton, setDisabledButton] = useState(true);
    const [complete, setComplete] = useState(false);
    const [src, setSrc] = useState("/images/pieza.png");
    const [opacity, setOpacity] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() =>{
        if (complete){
            setTimeout(() => {
                setOpacity(1)
            }, 250)

            setTimeout(() => {
                setOpacity(0)
            }, 1550)

            setTimeout(() => {
                setOpacity(1)
                setSrc("/images/brillo.png")
            }, 2000)

            setTimeout(() => {
                setFinished(true)
            }, 2700)
        }
    },[complete])

    return (
        <article className="bg-white w-2/5 h-3/5 flex flex-col items-center justify-center pt-7 pl-7 pr-7 pb-7 z-10 rounded-2xl shadow-xl">
            {finished == false && (
                <div>
                    <h1 className="text-3xl font-extrabold text-center text-h1 mb-6">
                        ¡Bienvenido a IT
                        <b className="text-lila">COOL</b>
                        AB!
                    </h1>
                    
                    <ul>
                        <h2 className="font-bold text-h1">Pasos para unirte a tu primer proyecto:</h2>

                        <li className="flex mt-5 mb-4 items-center">
                            {
                                complete ? (
                                <>
                                    <div className="mr-2 bg-verificationColor h-6 min-w-6 rounded flex justify-center items-center">
                                        <img src="/images/check.png" alt="" />
                                    </div>
                                </>
                                )
                                :(
                                <>
                                    <div className="mr-2 bg-lila h-6 min-w-6 rounded flex justify-center items-center">
                                        <h3 className="text-white">1</h3>
                                    </div>
                                </>
                                )
                            }
                            <h2 className="">Selecciona tu rol</h2>
                        </li>

                        <li className="flex mt-4 mb-4 items-center justify-between w-full">
                            <div className={`transition-all duration-500 mr-2 ${disabled ? "bg-containerSubmit" : "bg-lila"} bg-containerSubmit h-6 min-w-6 rounded flex justify-center items-center`}>
                                <h3 className="text-white">2</h3>
                            </div>
                            <h2 className={`transition-all duration-500 ${disabled ? "text-containerSubmit" : ""}`}>Serás asignado automáticamente a un grupo.</h2>
                        </li>

                        <li className="flex mt-4 mb-4 items-center">
                            <div className={`mr-2 bg-containerSubmit h-6 min-w-6 rounded flex justify-center items-center`}>
                                <h3 className="text-white">3</h3>
                            </div>
                            <h2 className={`text-containerSubmit`}><b className="font-bold">Cool</b>abora!</h2>
                        </li>
                    </ul>

                    {disabled ? (
                        <>
                            <Dropdown 
                            data={Data}
                            newRole={setRole}
                            disabled={setDisabledButton}
                            style="flex items-center justify-between mt-5 mb-2 pl-3 pr-3 pt-4 pb-4 w-full font-semibold text-h1 rounded-lg"
                            />
                            <div className="flex justify-end">
                                <button 
                                type="submit"
                                disabled={disabledButton}
                                className={`pt-3 pb-3 pl-4 pr-4 rounded-lg transition-all duration-500 mt-7 ${disabledButton ? "border-4 border-containerSubmit" : "border-4 border-borderSubmit"} ${disabledButton ? "bg-containerSubmit" : "bg-logo"} text-colorSubmit`}
                                onClick={() => {
                                    setDisabled(!disabled);
                                    setComplete(!complete);
                                }}
                                >
                                    Unirme a un grupo
                                </button>
                        </div>
                    </>
                ):(
                    <div className="flex justify-center mt-12 mb-12">
                        <img className={`opacity-${opacity} transition-all duration-1000`} src={src} alt="" />
                    </div>
                )}
                </div>
            )}
            
            
            {finished && (
                <div className="flex flex-col items-center movement">
                    <h1 className="text-6xl font-extrabold text-center text-h1 mb-6"><b className="text-turquesa">Cool</b>abora!</h1>
                    <img src="/images/finished.png" alt="" />
                </div>
            )}
        </article>
    )
}