import { useState, useEffect } from "react"
import logoP from "../assets/logoP.png"
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        // Add or remove a class to the body based on the menu state
        document.body.classList.toggle('overflow-hidden', isOpen);
        // Cleanup: remove the class when the component is unmounted
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);
    return (
        <div className=" h-24 w-full">
            <div className="h-full w-full flex items-center justify-between">
                <div className="ml-4">
                    <img className="w-20" src={logoP} alt="planet-logo" />
                </div>
                <div className=" m-auto">
                    <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#872341] to-[#ED7D31] p-4 uppercase">
                        Celestial <br /> Journey
                    </p>
                </div>
                <div>
                    <div>
                        <Hamburger onToggle={toggled => {
                            if (toggled) {
                                setOpen(true)
                            } else {
                                setOpen(false)
                            }
                        }} color="#E3651D" rounded />
                        {isOpen && (
                            <div className="fixed top-0 left-0 h-screen w-1/2 bg-white flex flex-col z-50">
                                <div className="p-4">Menu Item 1</div>
                                <div className="p-4">Menu Item 2</div>
                                <div className="p-4">Menu Item 3</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <hr className="line-star bg-gradient-to-r from-[#872341] to-[#ED7D31]" />
        </div>
    )
}
export default Navbar