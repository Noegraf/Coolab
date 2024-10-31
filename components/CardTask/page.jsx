export default function CardTask({ isInEquipo, isInPerfil, isInProyectos }){
    return(
        <section className="mr-7">

            <article className="shadow-lg mb-10 rounded-lg">
                <div className="flex items-center bg-lila rounded-t-lg py-2 px-4">
                    <span className="text-white mr-2 text-[1.4rem]">1</span>
                    <span className="text-white text-[1.1rem]">Comienza completando <b className="font-semibold">tus datos</b></span>
                </div>

                <div className="flex items-center bg-white py-6 px-4 rounded-b-lg">
                    <div 
                    className={`p-2 rounded-lg mr-3 ${isInPerfil ? "bg-verificationColor" : ""} transition-all duration-300`}
                    style={{
                        border: "1px solid #BAB8C1",
                    }}
                    >
                        {isInPerfil ? <img className="w-[15px]" src="/images/check.png" alt="" /> : <img src="/images/checkBlack.png" alt=""/>}
                    </div>
                    <span className="text-h1">Tarjeta personal completa</span>
                </div>
            </article>

            <article className="shadow-lg mb-10 rounded-lg">
                <div className="flex items-center bg-lila rounded-t-lg py-2 px-4">
                    <span className="text-white mr-2 text-[1.4rem]">2</span>
                    <span className="text-white text-[1.1rem]">Para poder <b className="font-semibold">cool</b>aborar deben <b className="font-semibold">comunicarse</b></span>
                </div>

                <div className="flex items-center bg-white py-6 px-4 rounded-b-lg">
                    <div
                    className={`p-2 rounded-lg mr-3 ${isInEquipo ? "bg-verificationColor" : ""} transition-all duration-300`}
                    style={{
                        border: "1px solid #BAB8C1",
                    }}
                    >
                        {isInEquipo ? <img className="w-[15px]" src="/images/check.png" alt="" /> : <img src="/images/checkBlack.png" alt=""/>}
                    </div>
                    <span className="text-h1">Ya armamos un canal o chat externo para <b className="font-semibold">organizarnos</b></span>
                </div>
            </article>

            <article className="shadow-lg rounded-lg">
                <div className="flex items-center bg-lila rounded-t-lg py-2 px-4">
                    <span className="text-white mr-2 text-[1.4rem]">3</span>
                    <span className="text-white text-[1.1rem]">Seleccionen el <b>proyecto</b> que les gustaría realizar</span>
                </div>

                <div className="flex items-center bg-white py-6 px-4 rounded-b-lg">
                    <div
                    className={`p-2 rounded-lg mr-3 ${isInProyectos ? "bg-verificationColor" : ""} transition-all duration-300`}
                    style={{
                        border: "1px solid #BAB8C1",
                    }}
                    >
                        <img src="/images/checkBlack.png" alt="" />
                    </div>
                    <span className="text-h1">Ya seleccionamos el proyecto</span>
                </div>
            </article>

        </section>
    )
}