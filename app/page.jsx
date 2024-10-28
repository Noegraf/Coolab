"use client";
import Login from "@/components/Login/page";
import Register from "@/components/Register/page";
import { useState } from "react";
export default function Home() {
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(!change);
  }

  return (
    <main className="w-dvw h-dvh flex">
      <section className="bg-logo w-1/2 h-dvh flex justify-center items-center">
        <img 
        src="/images/logo.png" 
        alt="logo" 
        className=""
        width={225}
        height={225}
        />
      </section>

      <section className="w-1/2 h-dvh flex justify-center items-center">
        {change ? <Login handleChange={handleChange}/> : <Register handleChange={handleChange}/>}
      </section>
    </main>
  );
}
