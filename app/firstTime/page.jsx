"use client";
import Welcome from "@/components/Welcome/page";
import { useEffect, useState } from "react";
import "./styles.css";
import SelectProyect from "@/components/SelectProyect/page";
import NavBar from "@/components/NavBar/page";

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
        <main className={`bg-backgroundFirstTime w-dvw h-dvh ${visible ? "flex justify-center items-center" : "sm:flex sm:justify-center sm:items-center"} overflow-x-hidden overflow-y-hidden px-9 max-sm:px-0 max-sm:overflow-y-auto max-sm:py-[100px]`}>
            <NavBar
            name="Primer ingreso"
            />

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