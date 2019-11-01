import React, { useContext } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Container = ({ children }) => {
  const { currentView } = useContext(ViewContext);
  return ( 
    <div className={`container-${currentView}`}>{children}</div>
   );
}
 
export default Container;