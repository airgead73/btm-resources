import React, { useContext } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Container = ({ containerClass, children }) => {
  return ( 
    <div className={`container-${containerClass}`}>{children}</div>
   );
}
 
export default Container;