import { useEffect, useState, Suspense } from "react";
import { Skills, Navbar, Projects } from "../Components/Dynamic/DynamicComp";

const Welcome = () => {
    const [background, setBackground] = useState("galaxy")
    const [text, setText] = useState(false)

    const getBackgroundImageUrl = (background) => {
        // Replace with your logic to determine the URL for each background
        if (background === "mars") {
            return "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        } else if (background === "galaxy") {
            return "https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        }
    };

    return (
        <div className="w-full h-screen bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url('${getBackgroundImageUrl(background)}')` }}>
            <Navbar />

            <div className="flex items-center justify-center h-[90vh]">
                <div className="m-auto" onMouseEnter={() => { setBackground("mars") }} onMouseLeave={() => { setBackground("galaxy") }}>
                    {!text ? (
                        <div className="w-full flex items-stretch justify-center">
                            <h1 className={`uppercase text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#872341] to-[#ED7D31] font-bold border-2 border-orange-400 p-8`}>
                                portfolio
                            </h1>
                        </div>
                    ) : (
                        <div>
                            <h1 className="uppercase text-center text-teal-50 text-lg font-bold">
                                Greetings! I am Moncef Karmaoui, a dedicated Data Scientist with an unbridled passion for unraveling the complexities of machine learning.
                            </h1>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full h-[65vh]">
                <div className="w-full h-full m-auto">
                    <Skills />
                </div>
            </div>
            <div className="w-full h-[75vh] bg-[#0F0F0F]">
                <div className="w-full h-full m-auto">
                    <Projects />
                </div>
            </div>
        </div>


    )
}
export default Welcome;