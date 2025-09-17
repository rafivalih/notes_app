import logo_notesApp from "../../assets/logo_notesApp.png"
export const Navbar = () =>{
    return(
        <header className="flex  px-3 py-2 gap-3 border-b-2 border-zinc-800">
            <div className="w-12 h-12">
                <img src={logo_notesApp}alt="Imagelogo" className="w-full h-full select-none " />
            </div>
            <h1 className="text-lime-600 text-5xl font-bold select-none">Notes</h1>
        </header>
    )
}