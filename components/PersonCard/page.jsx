export default function PersonCard({ name, role, img, email, github, linkedin }){
    return(
        <article className="flex flex-col bg-white rounded-lg shadow-lg max-w-[245px] max-sm:w-full h-[250px]">
            <div className="flex items-center justify-between px-5 py-5">
                <img className="w-[70px]" src={img} alt="" />
                <h1 className="text-2xl text-lilatext font-bold">{name}</h1>
            </div>
            <div className="flex flex-col justify-center pb-8">
                <div className="flex items-center justify-between px-3 mb-3">
                    <div className="flex items-center">
                        <img className="w-[16px]" src="/images/extension.png" alt="" />
                        <h2 className="ml-2">{role}</h2>
                    </div>
                    <img className="hover:scale-110 cursor-pointer ml-2" src="/images/copy.png" alt="" />
                </div>

                <div className="flex items-center justify-between px-3 mb-3">
                    <div className="flex items-center">
                        <img className="w-[16px]" src="/images/logos/mail.png" alt="" />
                        <h2 className="ml-2">{email}</h2>
                    </div>
                    <img className="hover:scale-110 cursor-pointer ml-2" src="/images/copy.png" alt="" />
                </div>

                <div className="flex items-center justify-between px-3 mb-3">
                    <div className="flex items-center">
                        <img className="w-[16px]" src="/images/logos/githubGrey.png" alt="" />
                        <h2 className="ml-2">{github}</h2>
                    </div>
                    <img className="hover:scale-110 cursor-pointer ml-2" src="/images/copy.png" alt="" />
                </div>

                <div className="flex items-center justify-between px-3">
                    <div className="flex items-center">
                        <img className="w-[16px]" src="/images/logos/linkedinGrey.png" alt="" />
                        <h2 className="ml-2">{linkedin}</h2>
                    </div> 
                    <img className="hover:scale-110 cursor-pointer ml-2" src="/images/copy.png" alt="" />
                </div>
            </div>
        </article>
    )
}