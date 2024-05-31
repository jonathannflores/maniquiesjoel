import { NavLink } from "react-router-dom"

function Navbar(){
    return <nav>
        <ul>
            <NavLink to="/">
            <li>Logo</li>
            </NavLink>
        </ul>
        <ul>
            <NavLink to="/">
                <li>Inicio</li>
            </NavLink>
            <NavLink to="/productos">
                <li>Productos</li>
            </NavLink>
            <NavLink to="/quienes-somos">
                <li>Quienes somos</li>
            </NavLink>
            <NavLink to="/contacto">
                <li>Contacto</li>
            </NavLink>
        </ul>
    </nav>
}

export default Navbar