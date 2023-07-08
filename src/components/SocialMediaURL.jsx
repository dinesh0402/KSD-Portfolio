import React from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function SocialMediaURL({Name,MediaIcon,Color,HREF}) {
  return (
    <div>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300' style={{backgroundColor: Color}}>
            <a className='flex justify-between items-center w-full text-gray-300' href={HREF} target='blank'>
                {Name} <MediaIcon size={30} />
            </a>
        </li>
    </div>
  )
}

export default SocialMediaURL