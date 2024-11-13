export default function NavBar({ name }) {
    return (
        <nav className="fixed top-0 flex justify-between items-center w-full py-3 max-sm:py-[1vh] px-7 z-20 bg-backgroundFirstTime max-sm:shadow">
            <img 
            src="/images/logo2.png" 
            alt="" 
            className=""
            />
            <h1 className="text-blackLila font-bold text-3xl max-sm:text-xl mx-5 text-center">{name}</h1>
            <div className="bg-containerSubmit p-2 rounded-lg">
                <img src="/images/person.png" alt="" />
            </div>
        </nav>
    )
}