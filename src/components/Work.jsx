import React from 'react'
import ProjectImg1 from '../Assets/projects/realestate.jpg'
import ProjectImg2 from '../Assets/projects/workImg.jpeg'
import ProjectCard from './ProjectCard'
import {data} from '../data/data'

function Work() {

    const project = data;

  return (
    <div name='work' className='w-full h-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            {/* Heading */}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work ...</p>
            </div>
            
            {/* Projects Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* <div style={{ backgroundImage: `url(${ProjectImg2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'> */}
                    
                    {/* Hover Effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Appilication
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}
                {project.map((item) => (
                    <ProjectCard key={item.id} name={item.name} description={item.description} image={item.image} tags={item.tags} github={item.github} live={item.live}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work