export default function InputMail({ placeholder, setText }) {
    return(
        <>
            <input 
                className="outline-none border-b border-b-border mb-3 pt-3 pb-3 pl-2 pr-2" 
                placeholder={placeholder} 
                type="text"
                onChange={(e) => setText(e.target.value)} 
                onPaste={(e) => e.preventDefault()}
            />
        </>
    )
}