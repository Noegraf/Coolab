import InputText from "../InputText/page";
import InputMail from "../InputMail/page";
import { useState } from "react";

export default function Profile( {setChange} ) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [discord, setDiscord] = useState("");
    const [linkedin, setLinkedin] = useState("");

    return (
        <section className="w-[800px] max-sm:max-w-xs bg-white flex justify-between max-sm:flex-col max-sm:items-center px-10 py-10 max-sm:py-5 shadow-xl rounded-lg">
            <div>
                <div className="relative">
                    <img src="/images/cara.png" alt="" />
                    <img className="absolute right-3 top-[170px] hover:scale-110 cursor-pointer" src="/images/lapiz.png" alt="" />
                </div>
                
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-[350px] max-sm:w-full">
                <InputText
                placeholder="Nombre"
                setText={setName}
                width={""}
                />
                <InputMail
                placeholder="Email"
                setText={setEmail}
                />
                <InputText
                placeholder="Github"
                setText={setGithub}
                />
                <InputText
                placeholder="Discord"
                setText={setDiscord}
                />
                <InputText
                placeholder="Linkedin"
                setText={setLinkedin}
                />

                <div className="flex items-center justify-end mt-10 ">
                    <button 
                    type="submit"
                    className="bg-borderSubmit text-[#1F076E] px-5 py-3 flex items-center rounded-lg transition-all duration-300 ease-in-out"
                    onClick={() => {
                        setChange[0]("Equipo");
                        setChange[1](true);
                    }}
                    >
                        <span className="font-semibold">
                            Continuar
                        </span>
                        <img className="w-4 ml-2" src={`/images/arrowViolet.png`} alt="" />
                    </button>
                </div>
                

            </form>
        </section>
    );
}