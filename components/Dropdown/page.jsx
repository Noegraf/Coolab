"use client"
import { useState } from "react";
import "./styles.css"

export default function Dropdown({ data, style, newRole, disabled }) {
    const [dropdown, setDropdown] = useState(false);
    const [role, setRole] = useState("Selecciona tu rol");
    
    return (
        <div className="relative">
        <div 
        className={`cursor-pointer ${style} hover:bg-gray-100 transition-all duration-100`}
        style={{
            border: "1px solid #BAB8C1",
        }}
        onClick={() => setDropdown(!dropdown)}
        >
            <span>{role}</span>
            <img src="/images/Vector.png" alt="" />
        </div>
        {dropdown && (
            <div className="bg-backgroundFirstTime absolute w-full overflow-y-auto max-h-60">
            {data.roles.map((rolemap, key) => (
                <h1 
                className="cursor-pointer py-3 px-4 w-full transition-all duration-250 hover:bg-lila" 
                key={key}
                onClick={() => {
                    setRole(rolemap);
                    setDropdown(false);
                    newRole(rolemap);
                    disabled(false);
                }}
                >
                    {rolemap}
                </h1>
            ))}
            </div>
        )}
        </div>
    );
}