import { Link } from "react-router"

import LogoDark from '../assets/denis-cropped-logo4.png'
import LogoLight from '../assets/denis-cropped-logo2.png'
import { useTheme } from "./theme-provider"
import { FaHome, FaUserSecret } from "react-icons/fa"
import { RiLayoutMasonryFill } from "react-icons/ri"
import { BsPersonWorkspace } from "react-icons/bs"
import { MdContactMail } from "react-icons/md"
import { LuMoon, LuSun } from "react-icons/lu"
import MobileNav from "./MobileNav"

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const handleTheme = () => {
        setTheme(theme === 'dark'? 'light' : 'dark')
    }
  return (
    <div className="nav-bar">
        <div className="nav-logo">
            <Link to="/" className="flex">
                <img 
                    src={theme === 'dark' ? LogoDark : LogoLight} 
                    alt="Logo" 
                    className="h-[50px] w-auto" 
                />
            </Link>
        </div>
        <nav className="hidden md:flex">
            <ul className="flex gap-3 justify-center items-center">
                <li>
                    <Link to="/" className="nav-link">
                        <FaHome className="text-gradient-1" size={30} />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">
                        <FaUserSecret className="text-gradient-1" size={30} />
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to="/skills" className="nav-link">
                        <RiLayoutMasonryFill className="text-gradient-1" size={30} />
                        <span>Skills</span>
                    </Link>
                </li>
                <li>
                    <Link to="/work" className="nav-link">
                        <BsPersonWorkspace className="text-gradient-1" size={30} />
                        <span>Work</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">
                        <MdContactMail className="text-gradient-1" size={30} />
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <MobileNav />
        <div className="flex">
            <button className="flex items-center" onClick={handleTheme}>
                {theme === 'dark' ? 
                    <LuSun size={28} />
                    :
                    <LuMoon size={28} />
                }
            </button>
        </div>
    </div>
  )
}

export default Navbar