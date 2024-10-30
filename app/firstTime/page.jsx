import Welcome from "@/components/Welcome/page";

export default function FirstTime() {
    return (
        <main className="bg-backgroundFirstTime w-dvw h-dvh flex justify-center items-center overflow-x-hidden">
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
            <img 
            src="/images/ilustraciones.png" 
            alt="" 
            className="absolute sm:left-[5%] max-sm:bottom-[0px]"
            />

            <Welcome />
        </main>
    )
}