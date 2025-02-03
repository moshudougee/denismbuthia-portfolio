import { useState } from "react"
import { BsPersonWorkspace } from "react-icons/bs"
import { FaBars, FaHome, FaTimes, FaUserSecret } from "react-icons/fa"
import { MdContactMail } from "react-icons/md"
import { RiLayoutMasonryFill } from "react-icons/ri"
import { Link } from "react-router"

const MobileNav = () => {
    const [nav, setNav] = useState<boolean>(false)
    
    const toggleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="flex justify-center items-center md:hidden">
        <div className="z-10" onClick={toggleNav}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
            className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-5/6 h-1/3 px-10 bg-background/90 flex flex-col justify-center items-start'
            }
        >
            <li className="py-6 text-4xl" onClick={toggleNav}>
                <Link to="/" className="nav-link">
                    <FaHome className="text-gradient-1" size={30} />
                    <span>Home</span>
                </Link>
            </li>
            <li className="py-6 text-4xl" onClick={toggleNav}>
                <Link to="/about" className="nav-link">
                    <FaUserSecret className="text-gradient-1" size={30} />
                    <span>About</span>
                </Link>
            </li>
            <li className="py-6 text-4xl" onClick={toggleNav}>
                <Link to="/skills" className="nav-link">
                    <RiLayoutMasonryFill className="text-gradient-1" size={30} />
                    <span>Skills</span>
                </Link>
            </li>
            <li className="py-6 text-4xl" onClick={toggleNav}>
                <Link to="/work" className="nav-link">
                    <BsPersonWorkspace className="text-gradient-1" size={30} />
                    <span>Work</span>
                </Link>
            </li>
            <li className="py-6 text-4xl" onClick={toggleNav}>
                <Link to="/contact" className="nav-link">
                    <MdContactMail className="text-gradient-1" size={30} />
                    <span>Contact</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav