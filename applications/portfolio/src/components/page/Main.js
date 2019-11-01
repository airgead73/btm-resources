import React, { useContext } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Main = ({ children }) => {
  const { currentView } = useContext(ViewContext);
  return ( 
    <main className={`main-${currentView}`}>{children}</main>
   );
}
 
export default Main;