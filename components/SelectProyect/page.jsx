import Profile from "@/components/Profile/page";
import Button from "../Button/page";
import { useState } from "react";
import CardTask from "../CardTask/page";
import "./styles.css";
import CardTaskResponsive from "../CardTaskResponsive/page";

export default function SelectProyect() {
    const [change, setChange] = useState("Mi perfil");
    const [perfil, setPerfil] = useState(false);
    const [equipo, setEquipo] = useState(false);
    const [proyectos, setProyectos] = useState(false);


    return(
        <section className="w-svw sm:flex animation">

            <div className="sm:hidden">
                <CardTaskResponsive
                isInEquipo={equipo}
                isInPerfil={perfil}
                isInProyectos={proyectos}
                />
            </div>
        
            <div className="max-sm:hidden">
                <CardTask
                isInEquipo={equipo}
                isInPerfil={perfil}
                isInProyectos={proyectos}
                />
            </div>

            
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
                <div className="mb-3 max-sm:flex max-sm:justify-start max-sm:w-full max-sm:max-w-xs">
                    <Button 
                    text="Mi perfil"
                    change={change}
                    setChange={[setChange, ""]}
                    margin={"max-sm:mr-2 mr-5"}
                    />
                    <Button 
                    text="Equipo"
                    change={change}
                    setChange={[setChange, setPerfil]}
                    margin={"max-sm:mr-2 mr-5"}
                    />
                    <Button text="Proyectos"
                    change={change}
                    setChange={[setChange, setEquipo]}
                    margin={""}
                    />
                </div>
                <Profile
                setChange={[setChange, setPerfil]}
                />
            </div>
            
        </section>
    )
}