import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../contexts/ViewContext';



const Header = (props) => {
  const { currentView } = useContext(ViewContext);
  return ( 
    <header className={`header-${currentView}`}>
      <h1><Link to='/' title='return to home page'>btm</Link></h1>
     
    </header>
   );
}
 
export default Header;