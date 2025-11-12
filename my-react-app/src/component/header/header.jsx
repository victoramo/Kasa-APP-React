
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/kasa.svg";

/** Ce composant retourne :
 * Un header, qui lui même retourne un nav.
 * Dans le nav, il y a le logo et une courte liste de toutes les pages.
 */

const Navigation = () => {
    return (
        <header>
            <nav className='header'>
                <NavLink to="/" className="header__logo-link">
                    <img 
                      className='header__logo' 
                      src={logo} 
                      alt="Logo Kasa"  />
                </NavLink>
                <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'liActif' : ''}>
                                Accueil
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'liActif' : ''}>
                                À propos
                            </NavLink>
                        </li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Navigation;