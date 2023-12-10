import {useState} from 'react';
import circle from "../assets/cool-circle.gif";
const Projects=()=>{
    return (  
        <div className='min-h-full pt-3 bg-[#092635]'>
            <div className=''>
                <h1 className='text-2xl font-bold text-gray-100 text-center uppercase'>
                “ Experienced In ”
                </h1>
            </div>
            <div className='w-1/2 m-auto mt-3 h-1 bg-gradient-to-r from-[#F5F7F8] to-[#F3F8FF] rounded-full'/>
            <div className='w-full h-full p-5'>
                <div className='flex justify-center'>
                {/* Make Cards */}
                    <ul className='w-full flex justify-around'>
                        <li className='bg-[#F5F7F8]'>
                            <div className='w-16'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/9716/9716599.png'} alt="deeplearning"/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl capitalize'>
                                    deep learning
                                </h1>
                                <p>

                                </p>
                            </div>
                        </li>
                        <li className='bg-[#F5F7F8]'>
                            <div className='w-16'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/9716/9716599.png'} alt="deeplearning"/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl capitalize'>
                                    deep learning
                                </h1>
                                <p>

                                </p>
                            </div>
                        </li>
                        <li className='bg-[#F5F7F8]'>
                            <div className='w-16'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/9716/9716599.png'} alt="deeplearning"/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl capitalize'>
                                    deep learning
                                </h1>
                                <p>

                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Projects;