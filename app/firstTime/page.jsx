"use client";
import Welcome from "@/components/Welcome/page";
import { useEffect, useState } from "react";
import "./styles.css";
import SelectProyect from "@/components/SelectProyect/page";

export default function FirstTime() {
    const [animation, setAnimation] = useState("");
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (animation === "left"){
            setTimeout(() => {
                setVisible(false);
            }, 2000)
        }
        
    }, [animation])

    return (
        <main className="bg-backgroundFirstTime w-dvw h-dvh flex justify-center items-center overflow-x-hidden overflow-y-hidden">
            <nav className="fixed top-0 flex justify-between items-center w-full py-3 px-7">
                <img 
                src="/images/logo2.png" 
                alt="" 
                className=""
                />
                <h1 className="text-blackLila font-bold text-3xl max-sm:text-2xl">Primer ingreso</h1>
                <div className="bg-containerSubmit p-2 rounded-lg">
                    <img src="/images/person.png" alt="" />
                </div>
            </nav>

            {visible ?(
                <>
                    <img 
                    src="/images/ilustraciones.png" 
                    alt="" 
                    className={`absolute sm:left-[5%] max-sm:bottom-[0px] ${animation}`}
                    />
        
                    <Welcome animationDraw={setAnimation}/>
                </>
            ):(
                <SelectProyect/>
            )}
            


        </main>
    )
}