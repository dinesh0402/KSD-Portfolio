import React from 'react'
import ProfilePic from '../Assets/Final Photo.jpg'

function About() {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'> About </p>
                </div>

            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 mt-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Dinesh, nice to meet you. Please take a look around.</p>
                </div>                  
                
                <div>
                    <p>I'm a Computer Science student of IIITDM Kancheepuram, passionate about building excellent software that improves
                    the lives of those around me. Started off this journey with Web Development, then Machine Learning & currently working on Image Processing & Deep Learning applications.</p>  
                </div>

                <div>
                    <img className='max-w-[250px] mx-auto rounded-full object-cover' src={ProfilePic} alt="Profile Pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About