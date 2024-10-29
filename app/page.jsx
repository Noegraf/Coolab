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
      <section className="bg-logo w-1/2 max-sm:w-full h-dvh flex justify-center items-center">
        <img 
        src="/images/logo.png" 
        alt="logo" 
        className="max-sm:absolute w-1/3 max-sm:h-150 max-sm:w-150"
        style={{
          top : "5%"
        }}
        />
      </section>

      <section 
      className="w-1/2 max-sm:w-3/4 h-dvh flex justify-center items-center max-sm:absolute top-1/2 left-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:bg-white max-sm:h-auto max-sm:pt-5 max-sm:pb-6 transition-all duration-100"
      style={{
        top:"58%",
      }}
      >
        {change ? <Login handleChange={handleChange}/> : <Register handleChange={handleChange}/>}
      </section>
    </main>
  );
}
