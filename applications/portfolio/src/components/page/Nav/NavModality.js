import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../../contexts/ViewContext';

const NavMain = () => {
  const { currentView } = useContext(ViewContext);
  return ( 
    <nav className={`nav-modality-${currentView}`} id="nav-modality">
      <ul>       
        <li><Link className="button" to={{
          pathname: '/work/sculpture',
          state: {
            modality: 'sculpture'
          }
        }}>sculpture</Link></li>
        <li><Link className="button" to={{
          pathname: '/work/drawing',
          state: {
            modality: 'drawing'
          }
        }}>drawing</Link></li>
        <li><Link className="button" to={{
          pathname: '/work/painting',
          state: {
            modality: 'painting'
          }
        }}>painting</Link></li>              
      </ul>
    </nav>
   );
}
 
export default NavMain;