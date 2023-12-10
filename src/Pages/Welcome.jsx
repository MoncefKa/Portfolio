import { useEffect, useState, Suspense } from "react";
import Project from "../Components/Projects.jsx";

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
        <div className="w-full h-full mt-5">
            <div style={{ backgroundImage: `url('${getBackgroundImageUrl(background)}')` }} className={`w-auto h-[85vh] bg-fixed bg-center bg-no-repeat mt-2`}>
                <div className="w-full h-full flex items-center">
                    <div className="m-auto" >
                        <div className="h-[9vh] w-[35vw]" onMouseEnter={() => { setBackground("mars"); setText(true) }} onMouseLeave={() => { setBackground("galaxy"); setText(false) }}>
                            {!text ?
                                <div>
                                    <h1 className={`uppercase text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#872341] to-[#ED7D31] font-bold border-2 border-orange-400 p-5`} >
                                        portfolio
                                    </h1>
                                </div> :
                                <div>
                                    <h1 className="uppercase text-center text-teal-50 text-lg font-bold">
                                        Greetings! I am Moncef Karmaoui, a dedicated Data Scientist with an unbridled passion for unraveling the complexities of machine learning.
                                    </h1>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[75vh]">
                <div className="w-full h-full m-auto">
                    <Project/>
                </div>
            </div>
        </div>
    )
}
export default Welcome;