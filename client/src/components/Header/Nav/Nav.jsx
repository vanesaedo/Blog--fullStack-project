import React from "react";
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return <nav>
            <div className="item_main_nav">
                <NavLink to='/' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
                    Home
                </NavLink>
            </div>
            <div className="item_main_nav">
                <NavLink to='/new/?' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
                    Nuevo artículo
                </NavLink>
            </div>
            <div className="item_main_nav">
                <NavLink to='/api/authors' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
                    Autores
                </NavLink>
            </div>
        </nav >
};

export default Nav;
