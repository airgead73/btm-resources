import React, { useContext, useEffect } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Work = ({ view }) => {
  const { currentView, changeView } = useContext(ViewContext);

  useEffect(() => {
    document.title = view;
    changeView(view);
  },[changeView]);

  return ( 
    <h1>{currentView}</h1>
   );
}
 
export default Work;