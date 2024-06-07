import { NavLink } from "react-router-dom"
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer-logo">
                <div className="logo">
                    <img src="https://i.imgur.com/Nkwo0ii.jpeg" alt="logo" />
                </div>
                <div>
                    <p>Copyright © 2024 Maniquies Joel</p>
                </div>
            </div>
            <div className="footer-navegacion">
                <h2>Navegacion</h2>
                <ul>
                    <NavLink to="/">
                        <li>Inicio</li>
                    </NavLink>
                    <NavLink to="/productos">
                        <li>Productos</li>
                    </NavLink>
                    <NavLink to="/quienes-somos">
                        <li>Quienes Somos</li>
                    </NavLink>
                    <NavLink to="/contacto">
                        <li>Contacto</li>
                    </NavLink>
                </ul>
            </div>
            <div className="footer-contacto">
                <div>
                    <h2>Contacto</h2>
                    <ul>
                        <li>1162229647</li>
                        <li><a href="https://www.facebook.com/Maniquies.Joel">Maniquies Joel</a></li>
                        <li><a href="https://www.instagram.com/maniquiesjoel/">@maniquiesjoel</a></li>
                    </ul>
                </div>
                <div>
                    <p>Realizado por Jonathan Flores</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer