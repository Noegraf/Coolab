"use client";
import Profile from "@/components/Profile/page";
import Button from "../Button/page";
import { useEffect, useState } from "react";
import CardTask from "../CardTask/page";
import "./styles.css";
import CardTaskResponsive from "../CardTaskResponsive/page";
import PersonCard from "../PersonCard/page";
import Project from "../Project/page";
import data from "../../data/projects.json";
import { useRouter } from "next/navigation";
export default function SelectProyect() {
    const router = useRouter();
    const [change, setChange] = useState("Mi perfil");
    const [perfil, setPerfil] = useState(false);
    const [equipo, setEquipo] = useState(false);
    const [proyectos, setProyectos] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [animation, setAnimation] = useState("animation");
    const [render, setRender] = useState(true);
    const [image, setImage] = useState("/images/pieza.png");

    useEffect(() => {
        if (isClicked){
            setTimeout(() => setAnimation("animationBottom"), 1000);

            setTimeout(() => {
                setRender(false);
                setAnimation("animation max-sm:flex justify-center items-center max-sm:h-full");
            }, 1900);

            setTimeout(() => setImage("/images/brillo.png"), 2500);
            setTimeout(() => setImage("/images/trianglePink.png"), 3000);
            setTimeout(() => setImage("/images/triangleLightViolet.png"), 3500);
            setTimeout(() => setImage("/images/triangleViolet.png"), 4000);
            setTimeout(() => setImage("/images/checkAnimation.png"), 4500);

            setTimeout(() => {
                if (typeof window !== "undefined") {
                    router.push("/dashboard");
                }
            }, 5400);
        }
    },[isClicked, router])
    return(
        <section className={`w-vw sm:flex  ${animation}`}>
            {render && (
                <>
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
                            margin={"max-sm:mr-2 mr-5"}
                            />
                            <Button 
                            text="Equipo"
                            change={change}
                            margin={"max-sm:mr-2 mr-5"}
                            />
                            <Button text="Proyectos"
                            change={change}
                            margin={""}
                            />
                        </div>
                        {change === "Mi perfil" && 
                        <Profile
                        setChange={[setChange, setPerfil]}  
                        />}

                        {change === "Equipo" &&
                        <> 
                        <div className="max-sm:w-full sm:max-w-[800px] flex max-sm:justify-center flex-wrap gap-5 sm:max-h-[420px] sm:overflow-auto sm:pb-5">
                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />

                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />

                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />

                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />

                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />

                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />

                            <PersonCard
                            name={"Pepe"}
                            role={"Desarrollador Frontend"}
                            img={"/images/cara.png"}
                            email={"pepe@pe.com"}
                            github={"pepe"}
                            linkedin={"pepe"}
                            />
                        </div>
                        <div className="flex justify-end py-5 pr-5 max-sm:py-10">
                            <button 
                            type="submit"
                            className="bg-borderSubmit text-[#1F076E] px-5 py-3 flex items-center rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => {
                                setChange("Proyectos");
                                setEquipo(true);
                            }}
                            >
                                <span className="font-semibold">
                                    Continuar
                                </span>
                                <img className="w-4 ml-2" src="/images/arrowViolet.png" alt="" />
                            </button>
                        </div>
                        </>
                        }

                        {change === "Proyectos" && (
                            <div className="max-sm:w-full sm:max-w-[800px] flex flex-col gap-5 max-sm:items-center sm:max-h-[420px] sm:overflow-auto sm:pb-5">
                                {data.map((project, key) => (
                                    <Project
                                    key={key}
                                    title={project.titulo}
                                    desc={project.descripcion}
                                    obj={project.objetivos}
                                    isDisabled={isClicked}
                                    setIsDisabled={setIsClicked}
                                    setProyectos={setProyectos}
                                    />
                                ))}
                                
                            </div>
                        )}
                    </div>
                </>
            )}
            
            {render == false && (
                <div className="flex flex-col items-center gap-5">
                    <div className="w-[80px] h-[80px] flex justify-center items-center">
                        <img  src={image} alt="" />
                    </div>
                    <h1 className="font-extrabold text-7xl text-gray-500 max-sm:text-5xl"><b className="text-turquesa">Cool</b>abora!</h1>
                </div>
            )}
        </section>
    )
}