import Profile from "@/components/Profile/page";
import Button from "../Button/page";
import { useState } from "react";
import CardTask from "../CardTask/page";

export default function SelectProyect() {
    const [change, setChange] = useState("Mi perfil");
    const [perfil, setPerfil] = useState(false);
    const [equipo, setEquipo] = useState(false);
    const [proyectos, setProyectos] = useState(false);


    return(
        <section className="flex justify-between">
            <CardTask
                isInEquipo={equipo}
                isInPerfil={perfil}
                isInProyectos={proyectos}
                />
            <div>
                <div className="mb-5">
                    <Button 
                    text="Mi perfil"
                    change={change}
                    setChange={[setChange, ""]}
                    />
                    <Button 
                    text="Equipo"
                    change={change}
                    setChange={[setChange, setPerfil]}
                    />
                    <Button text="Proyectos"
                    change={change}
                    setChange={[setChange, setEquipo]}
                    />
                </div>
                <Profile/>
            </div>
            
        </section>
    )
}