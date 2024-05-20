import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return <nav>
     
      <NavLink  to='/' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
          Home
      </NavLink>
      <NavLink  to='/new/?' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
          Nuevo artículo
      </NavLink>
      <NavLink  to='/api/authors' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
         Autores
      </NavLink>
     
    </nav >   


};

export default Nav;
