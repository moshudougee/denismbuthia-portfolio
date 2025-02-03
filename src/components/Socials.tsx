import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Socials = () => {
  return (
    <div className='socials'>
            <ul>
                <li className='list bg-blue-600'>
                    <a
                    className='link'
                    href='https://www.linkedin.com/in/denis-mbuthia-17a56842/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='list bg-[#333333]'>
                    <a
                    className='link'
                    href='https://github.com/moshudougee'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='list bg-[#6fc2b0]'>
                    <a
                    className='link'
                    href='https://twitter.com/Moshudougee'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Twitter <FaTwitterSquare size={30} />
                    </a>
                </li>
                <li className='list bg-[#3962e7]'>
                    <a
                    className='link'
                    href='https://facebook.com/moshudougee'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Facebook <FaFacebook size={30} />
                    </a>
                </li>
                <li className='list bg-[#e45353]'>
                    <a
                    className='link'
                    href='https://instagram.com/douglasmbuthia'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Intagram <FaInstagramSquare size={30} />
                    </a>
                </li>
                <li className='list bg-[#565f69]'>
                    <a
                    className='link'
                    href="/docs/My-Resume.pdf" 
                    target="_blank"
                    rel='noreferrer' 
                    download="My Resume"
                    >
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
  )
}

export default Socials