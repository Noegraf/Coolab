export default function ProjectSelected({ title, desc, obj }) {
    return (
        <article className="bg-white shadow-lg rounded-lg max-sm:max-w-xs px-6 py-6 mx-10">
            <h1 className="text-2xl text-lilatext font-extrabold mb-3">{title}</h1>
            <h2 className="text-h1 font-bold text-xl mb-3">Descripción</h2>
            <p className="mb-3">{desc}</p>
            <h2 className="text-h1 font-bold text-xl mb-3">Objetivos</h2>
            {obj.map((o, i) => 
            <p 
            key={i}
            className="mb-2"
            >
                {`${i + 1}.  ${o}`}
            </p>)}
        </article>
    )
}