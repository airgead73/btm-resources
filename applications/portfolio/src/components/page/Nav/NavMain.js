import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ViewContext } from '../../contexts/ViewContext';

const NavMain = () => {
  const { currentView } = useContext(ViewContext);
  return ( 
    <nav className={`nav-main-${currentView}`} id="nav-primary">
      <ul>       
        <li><NavLink className="button" activeClassName="nav-active" to="/">home</NavLink></li>
        <li><NavLink className="button" activeClassName="nav-active" to="/about">about</NavLink></li>
        <li><NavLink className="button" activeClassName="nav-active" to="/work">work</NavLink></li>
        <li><NavLink className="button" activeClassName="nav-active" to="/contact">contact</NavLink></li>
        <li><NavLink className="button" activeClassName="nav-active" to="/terms">terms</NavLink></li>       
      </ul>
    </nav>
   );
}
 
export default NavMain;