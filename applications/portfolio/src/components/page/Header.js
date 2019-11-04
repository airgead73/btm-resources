import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ headerClass }) => {
  return ( 
    <header className={`header-${headerClass}`}>
      <h1><Link to='/' title='return to home page'>btm</Link></h1>
     
    </header>
   );
}
 
export default Header;