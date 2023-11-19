import logoP from "../assets/logoP.png"

const Navbar = () => {
    return (
        <div className="h-24 w-full">
            <div className="h-full w-full flex">
                <div className="ml-4">
                    <img className="w-20" src={logoP} alt="planet-logo" />
                </div>
                <div className="m-auto">
                    <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#872341] to-[#ED7D31] p-4 uppercase">
                        Celestial <br/> Journey
                    </p>
                </div>
            </div>
            <hr className="line-star bg-gradient-to-r from-[#872341] to-[#ED7D31]" />
        </div>
    )
}
export default Navbar