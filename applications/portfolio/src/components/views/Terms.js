import React, { useContext, useEffect } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Terms = () => {
  const { changeView } = useContext(ViewContext);

  useEffect(() => {
    changeView('terms');   
  },[changeView]); 

  return ( 
    <h1>Terms</h1>
   );
}
 
export default Terms;