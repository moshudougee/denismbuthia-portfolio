import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Socials from "../components/Socials"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen m-auto">
        <Navbar />
        <Socials />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout