import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaTwitterSquare,
    FaInstagramSquare
  } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/denis-cropped-logo4.png';
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#1e4074] text-gray-300 z-10'>
      <div className='py-2 mt-2 pl-11'>
        <img src={Logo} alt='Logo' className='h-auto w-40' />
      </div>
      
        {/* menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
            className={
            !nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-[#1e4074] flex flex-col justify-center items-center'
            }
        >
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden sm:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/denis-mbuthia-17a56842/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/moshudougee'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://twitter.com/Moshudougee'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Twitter <FaTwitterSquare size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3962e7]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://facebook.com/moshudougee'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Facebook <FaFacebook size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e45353]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://instagram.com/douglasmbuthia'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Intagram <FaInstagramSquare size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href="/docs/full-stack resume.pdf" 
                    target="_blank"
                    rel='noreferrer' 
                    download="My Resume"
                    >
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
