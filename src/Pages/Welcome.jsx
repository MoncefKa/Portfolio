import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../Components/Loading";

const Welcome = () => {

    const [quote, setQuote] = useState("")

    return (
        <div className="w-full h-full mt-16">
            <div className="w-auto h-[45vh] bg-galaxy mt-2">
                <div className="w-full h-full flex items-center">
                    <div className="m-auto">
                        <h1 className="uppercase text-3xl text-zinc-100 font-bold">
                            portfolio
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome;