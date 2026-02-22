import Button from "../components/Button";


function Navbar() {
    return(
        <header className="p-6 bg-white shadow-xs">
            <div className="flex justify-between px-10">
                {/* left content */}
                <div className="flex">
                    <h1 className="font-semibold text-xl">
                        Academy <span className="text-primary">Tr</span>{" "}<span className="uppercase font-normal italic">Course Share</span>
                    </h1>
                </div>
                {/* right content */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <Button label="Sign Up" className="bg-primary h-8 w-30 me-4 text-white font-medium cursor-pointer hover:bg-purple-900 transition-all"/>
                    <Button label="Login" className="bg-transparent h-8 w-30 text-black font-medium border border-primary cursor-pointer hover:text-white hover:bg-primary transition-colors duration-200"/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;