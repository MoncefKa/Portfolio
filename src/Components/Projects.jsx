import { useState } from 'react';
import circle from "../assets/cool-circle.gif";
const Projects = () => {
    return (
        <div className='min-h-full pt-3 bg-[#F3F8FF]'>
            <div className=''>
                <h1 className='text-2xl font-bold text-[#191919] text-center uppercase'>
                    Experienced In 
                </h1>
            </div>
            <div className='w-1/2 m-auto mt-3 h-1 bg-gradient-to-r from-[#092635] to-[#191919] rounded-full' />
            <div className='w-full h-full p-5'>
                <div className='flex-col gap-5 justify-center'>
                    {/* Make Cards */}
                    <ul className='w-full flex justify-around'>
                        <li className='w-[35vw] p-4 rounded-md shadow-md flex-col items-center text-[#191919]'>
                            <div className='w-16 m-auto'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/3222/3222625.png'} alt="deeplearning" />
                            </div>
                            <div className='ml-4 pt-5'>
                                <h1 className='capitalize font-bold text-2xl uppercase text-center'>
                                    machine learning
                                </h1>
                                <p className='text-sm pt-5 font-bold text-center'>
                                    Proficient in machine learning, leveraging algorithms to extract <br />
                                    meaningful insights from complex data sets and enhance model performance.
                                </p>
                            </div>
                        </li>
                        
                        <li className='w-[35vw] p-4 rounded-md shadow-md flex-col items-center text-[#191919]'>
                            <div className='w-16 m-auto'>
                                <img src={'https://static.thenounproject.com/png/1409679-200.png'} alt="deeplearning" />
                            </div>
                            <div className='ml-4 pt-5'>
                                <h1 className='font-bold text-2xl uppercase text-center'>
                                    nlp
                                </h1>
                                <p className='capitalize text-sm pt-5 font-bold text-center'>
                                    Mastery in Natural Language Processing (NLP) Excelling in optimizing <br/> 
                                    model performance through advanced deep learning techniques and algorithms. </p>
                                
                            </div>
                        </li>

                        <li className='w-[35vw] p-4 rounded-md shadow-md flex-col items-center text-[#191919]'>
                            <div className='w-16 m-auto'>
                                <img src={'https://static.thenounproject.com/png/3649999-200.png'} alt="deeplearning" />
                            </div>
                            <div className='ml-4 pt-5'>
                                <h1 className='font-bold text-2xl uppercase text-center'>
                                    computer vision
                                </h1>
                                <p className='capitalize text-sm pt-5 font-bold text-center'>
                                Knowlegable image analysis, object recognition, and visual tasks, <br/> leveraging advanced deep learning
                                 for tailored insights and enhanced model performance.
                                </p>
                            </div>
                        </li>
                    </ul>

                    {/* Second Section */}
                    <ul className='w-full flex justify-around pt-5'>
                        <li className='w-[35vw] p-4 rounded-md shadow-md flex-col items-center text-[#191919]'>
                            <div className='w-16 m-auto'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/3309/3309897.png'} alt="deeplearning" />
                            </div>
                            <div className='ml-4 pt-5'>
                                <h1 className='font-bold text-2xl uppercase text-center'>
                                    data analysis
                                    <p className='capitalize text-sm pt-5 font-bold text-center'>
                                    Skilled in data analysis, I extract valuable insights from complex datasets, <br/>
                                    facilitating informed decision-making through effective analytical techniques.
                                    </p>
                                </h1>
                            </div>
                        </li>
                        
                        <li className='w-[35vw] p-4 rounded-md shadow-md flex-col items-center text-[#191919]'>
                            <div className='w-16 m-auto'>
                                <img src={'https://static.thenounproject.com/png/219095-200.png'} alt="deeplearning" />
                            </div>
                            <div className='ml-4 pt-5'>
                                <h1 className='font-bold text-2xl uppercase text-center'>
                                    web development
                                </h1>
                                <p className='capitalize text-sm pt-5 font-bold text-center'>
                                        I build user-friendly websites using the latest technologies for a <br/>
                                        seamless and impactful online experience.
                                    </p>
                            </div>
                        </li>

                        <li className='w-[35vw] p-4 rounded-md shadow-md flex-col items-center text-[#191919]'>
                            <div className='w-16 m-auto'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/5003/5003747.png'} alt="deeplearning" />
                            </div>
                            <div className='ml-4 pt-5'>
                                <h1 className='capitalize font-bold text-2xl uppercase text-center'>
                                    iot 
                                </h1>
                                <p className='text-sm pt-5 font-bold text-center'>
                                Proficient in IoT, I develop and integrate connected systems, leveraging smart devices to 
                                enhance efficiency and gather insights for well-informed decision-making.
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