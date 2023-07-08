import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import ProjectImg2 from '../Assets/projects/workImg.jpeg'

function ProjectCard({key,name,description,image,tags,github,live}) {
  return (
    <div id={key} className="max-w-md rounded overflow-hidden shadow-lg bg-[#ccd6f6] mx-auto">
        
        <img className="w-full h-[200px]" src={image} alt="Sunset in the mountains" />
        {/* <div class="max-w-md  bg-cover bg-no-repeat">
            <img src={image} class="transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
        </div> */}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black flex space-x-4">
                <div>{name}</div>
                {github.length > 0 && <div><a href={github} title='Code' target='blank'><FaGithub className='text-gray-900' size={25} /></a></div>}
                {live.length > 0 && <div><a href={live} title='Live' target='blank'><BsGlobe className='text-gray-900' size={25} /></a></div>}
            </div>
            <p className="text-gray-900 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {tags.map((tag) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard