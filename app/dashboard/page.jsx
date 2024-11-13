"use client";
import NavBar from "@/components/NavBar/page";
import ProjectSelected from "@/components/ProjectSelected/page";
import data from "../../data/projects.json";
import PersonCard from "@/components/PersonCard/page";
import "./styles.css";
export default function Dashboard() {
    return(
        <main className="bg-backgroundFirstTime w-dvw min-h-dvh flex flex-col sm:justify-center items-center py-5 overflow-x-hidden">
            
            <NavBar
            name="Dashboard"
            />

            <div className="flex px-10 mb-[20px] mt-[50px] sm:overflow-x-hidden max-sm:max-w-xs sm:w-full">
                <div className="flex sm:flex-wrap gap-5 sm:overflow-y-auto py-[20px] max-sm:justify-center max-sm:flex-col sm:w-full sm:justify-start sm:max-h-[300px]">
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
                
            </div>

            <ProjectSelected
            title={data[0].titulo}
            desc={data[0].descripcion}
            obj={data[0].objetivos}
            />
        </main>
    )
}