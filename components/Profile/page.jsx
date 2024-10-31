import InputText from "../InputText/page";
import InputMail from "../InputMail/page";
import { useState } from "react";

export default function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [discord, setDiscord] = useState("");
    const [linkedin, setLinkedin] = useState("");

    return (
        <section className="w-[700px] bg-white flex justify-between px-10 py-10 shadow-xl">
            <div>
                <div className="relative">
                    <img src="/images/cara.png" alt="" />
                    <img className="absolute right-3 top-[170px] hover:scale-110 cursor-pointer" src="/images/lapiz.png" alt="" />
                </div>
                
            </div>
            <div className="flex flex-col w-[350px]">
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
            </div>
        </section>
    );
}