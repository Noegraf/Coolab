import { useEffect, useState } from "react";

export default function CardTaskResponsive({ isInEquipo, isInPerfil, isInProyectos }) {
    const[newMessage, setNewMessage] = useState(0);
    const messages = ["Comienza completando tus datos", "Para poder colaborar deben comunicarse", "Seleccionen el proyecto que les gustaría realizar"];
    const task = ["Tarjeta personal completa", "Ya armamos un canal o chat externo para organizarnos", "Ya seleccionamos el proyecto"];
    useEffect(() => {
        if (isInPerfil && newMessage === 0) {
            setNewMessage(1);
        } else if (isInEquipo && newMessage === 1) {
            setNewMessage(2);
        } 
    },[isInEquipo, isInPerfil, isInProyectos]);

    return(
        <section className="mb-4 w-full shadow-lg rounded-lg m-auto max-w-xs">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="bg-lila rounded-t-lg px-6 py-3 flex items-center justify-center transition-all duration-300 ease-in-out mr-1">
                        <span className="text-white text-2xl">1</span>
                        <span className={`${newMessage === 0 ? "block" : "hidden"} text-white ml-3`}>{messages[0]}</span>
                    </div>

                    <div className="bg-lila rounded-t-lg px-6 py-3 flex items-center justify-center transition-all duration-300 ease-in-out mr-1">
                        <span className="text-white text-2xl">2</span>
                        <span className={`${newMessage === 1 ? "block" : "hidden"} text-white ml-3`}>{messages[1]}</span>
                    </div>

                    <div className="bg-lila rounded-t-lg px-6 py-3 flex items-center justify-center transition-all duration-300 ease-in-out">
                        <span className="text-white text-2xl">3</span>
                        <span className={`${newMessage === 2 ? "block" : "hidden"} text-white ml-3`}>{messages[2]}</span>
                    </div>

                </div>
                

                <div className="bg-white rounded-b-lg py-5 px-4 w-full">
                <span>{task[newMessage]}</span>
                </div>
            </div>

            
        </section>
    )
}