import React from 'react'
import { Link } from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, there </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I'm K Sai Dinesh 👋</h1>
            <p className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                <Typewriter
                    className='inline-block'
                    options={{
                        strings: [
                        "UnderGrad Student",
                        "ML Enthusiast",
                        "Competitive Programmer",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </p>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                As a passionate student, I enjoy problem-solving and have a strong interest in Machine Learning, continuously exploring its applications and advancements. Currently, I’m focused on flexing my Deep Learning skills as a starter.
            </p>
            <div>
                <Link to='work' smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
                </Link>
            </div>
            <div className='mt-4 '>
                <ul className='flex lg:hidden my-2 h-full justify-left'>
                    <li style={{borderRadius: "50%"}} className='bg-[#333] mr-4 pt-4 hover:scale-110 hover:duration-300'><a href='https://github.com/dinesh0402' target='blank'><FaGithub size={25} color='white' /></a></li>
                    <li style={{borderRadius: "50%"}} className='bg-[#0a66c2] mx-4 pt-4 hover:scale-110 hover:duration-300'><a href='https://www.linkedin.com/in/k-sai-dinesh-6b25b1246/' target='blank'><FaLinkedin size={25} color='white'/></a></li>
                    <li style={{borderRadius: "50%"}} className='bg-[#c21807] mx-4 pt-4 hover:scale-110 hover:duration-300'><a href='mailto: saidineshketha@gmail.com'  target='blank'><HiOutlineMail size={25} color='white'/></a></li>
                    <li style={{borderRadius: "50%"}} className='bg-[#03c04a] mx-4 pt-4 hover:scale-110 hover:duration-300'><a href='https://drive.google.com/file/d/1-v-lVjmrYR4U3QEkq8kYJVD2B3HZqNai/view?usp=drive_link' target='blank'><BsFillPersonLinesFill size={25} color='white' /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home