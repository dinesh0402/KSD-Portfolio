import React, {useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../Assets/KSD Portfolio Logo.gif'
import SocialMediaURL from './SocialMediaURL'
import { Link } from 'react-scroll'


function NavBar() {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Skill Logo" style={{width:"70px"}}/>
        </div>
        
        {/* Menu Bar */}
        <ul className='hidden md:flex'>
            <li><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} to='work' smooth={true} duration={500}>Projects</Link></li>
            <li><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
       

        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} onClick={handleClick} to='home' smooth={true} duration={500}> Home </Link></li>
            <li className='py-6 text-4xl'><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} onClick={handleClick} to='about' smooth={true} duration={500}> About </Link></li>
            <li className='py-6 text-4xl'><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} onClick={handleClick} to='skills' smooth={true} duration={500}> Skills </Link></li>
            <li className='py-6 text-4xl'><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} onClick={handleClick} to='work' smooth={true} duration={500}> Projects </Link></li>
            <li className='py-6 text-4xl'><Link className='hover:border-b-2 border-pink-600 hover:font-bold' activeClass='active' spy={true} onClick={handleClick} to='contact' smooth={true} duration={500}> Contact </Link></li>
        </ul>

        {/* Social Media Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li> */}
                <SocialMediaURL Name={"LinkedIn"} MediaIcon={FaLinkedin} Color={'#0a66c2'} HREF={'https://www.linkedin.com/in/k-sai-dinesh-6b25b1246/'}/>
                <SocialMediaURL Name={"Github"} MediaIcon={FaGithub} Color={'#333'} HREF={'https://github.com/dinesh0402'}/>
                <SocialMediaURL Name={"Mail"} MediaIcon={HiOutlineMail} Color={'#c21807'} HREF={'mailto: saidineshketha@gmail.com'}/>
                <SocialMediaURL Name={"Resume"} MediaIcon={BsFillPersonLinesFill} Color={'#03c04a'} HREF={'https://drive.google.com/file/d/1-v-lVjmrYR4U3QEkq8kYJVD2B3HZqNai/view?usp=drive_link'}/>
            </ul>
        </div>


    </div>
  )
}

export default NavBar