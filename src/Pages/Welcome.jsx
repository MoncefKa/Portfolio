import { useEffect,useState,Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../Components/Loading";

const Welcome = () => {

    const [quote,setQuote] = useState("")
    useEffect(()=>{

    })

    return (
        <div className="w-full h-full relative">
            <div className="absolute right-0 left-0 top-14 w-full h-[65vh] flex">
                <div className="flex m-auto h-full w-5/6 backdrop-blur-xl">
                    <img className="relative bottom-[5vh]" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saturnx.png/1200px-Saturnx.png"} alt="saturn" />
                    <div className="m-auto">
                    <h3 className="text-4xl text-center capitalize font-extrabold text-gray-400">
                    Welcome to my celestial corner of the internet! This space serves as a curated showcase of my expertise in data science.
                        </h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Welcome;