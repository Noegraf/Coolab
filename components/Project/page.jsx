import { useState } from "react";

export default function Project({ title, desc, obj, isDisabled, setIsDisabled, setProyectos }) {
    const [isClicked, setIsClicked] = useState(false);
    return(
        <article className="bg-white shadow-lg rounded-lg max-sm:max-w-xs px-6 py-6">
            <h1 className="text-2xl text-lilatext font-extrabold mb-3">{title}</h1>
            <h2 className="text-h1 font-bold text-xl mb-3">Descripción</h2>
            <p className="mb-3">{desc}</p>
            <h2 className="text-h1 font-bold text-xl mb-3">Objetivos</h2>
            {obj.map((o, i) => <p 
            key={i}
            className="mb-2"
            >
                {`${i + 1}.  ${o}`}
            </p>)}

            <div className="flex justify-end py-3 pt-6">
                <button
                disabled={isDisabled}
                className={`border-4 font-bold ${isClicked ? "border-verificationColor bg-verificationColor text-white" : "border-borderSubmit hover:bg-gray-200 text-h1"} px-5 py-4 rounded-lg  transition-colors`}
                onClick={() => {setIsClicked(true); setIsDisabled(true); setProyectos(true)}}
                >Seleccionar
                </button>
            </div>
        </article>
    )
}