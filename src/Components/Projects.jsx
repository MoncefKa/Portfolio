import React from 'react'
import hexagon from "../assets/hexa.svg"
function Projects() {
  return (
    <div className='h-full w-full'>
        <div className='pt-5'>
            <h1 className='text-[#FBF6EE] text-4xl text-center font-bold uppercase'>
            Projects
            </h1>
        </div>
        <div className='w-full h-full flex'>
        <div className='h-fit m-auto'>
            <img className='' src={hexagon} alt="hexagon"/>
        </div>
        </div>
        

    </div>
  )
}

export default Projects