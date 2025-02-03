import { Link, Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/dashboard/addskills">AddSkills</Link></li>
            </ul>
        </nav>
        <main>
            <p>This is backend <Link to="/">Home</Link></p>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout