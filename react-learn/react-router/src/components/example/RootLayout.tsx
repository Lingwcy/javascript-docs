import { Outlet } from "react-router"
import { NavLink } from "react-router"
export default function RootLayout() {
    return (
        <div>
            <p>RootLayout</p>
            <NavLink to='/' end> Home </NavLink>
            <p></p>
            <NavLink to='/settings' end>Settings</NavLink>
            <p>-</p>
            <p>Main Content</p>
            <Outlet />
        </div>
    )
}

