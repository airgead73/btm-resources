import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../contexts/ViewContext';

const Work = () => {
  const { changeView } = useContext(ViewContext);

  useEffect(() => {    
    changeView('work');    
  },[changeView]); 

  return ( 
    <React.Fragment>
      <h1>Work</h1>
      <ul>
        <li><Link to='/work/sculpture'>sculpture</Link></li>
        <li><Link to='/work/painting'>painting</Link></li>
        <li><Link to='/work/drawing'>drawing</Link></li>
      </ul>
    </React.Fragment>
    
   );
}
 
export default Work;