import { NavLink } from "react-router-dom"
import React, { useState } from 'react';
import './Navbar.css';


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
        <h1 className="header-h1">
            <NavLink className="header-li" to="/">
                Maniquies Joel
            </NavLink> 
        </h1>

        <button 
            onClick={ toggleMenu }
         className="header-button">
        <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <nav className={ `header-nav ${ isOpen ? 'isActive' : '' }` }>
            <ul className="header-ul">
                <NavLink className="header-li" to="/">
                        <li>Inicio</li>
                    </NavLink>
                    <NavLink className="header-li" to="/productos">
                        <li>Productos</li>
                    </NavLink>
                    <NavLink className="header-li" to="/quienes-somos">
                        <li>Quienes somos</li>
                    </NavLink>
                    <NavLink className="header-li" to="/contacto">
                        <li>Contacto</li>
                    </NavLink>
            </ul>
        </nav>
    </header>
    )
    
}

export default Navbar