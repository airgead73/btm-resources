import React, { useContext, useEffect } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Contact = () => {
  const { changeView } = useContext(ViewContext);

  useEffect(() => {
    changeView('contact')  
  },[changeView]);

  return ( 
    <h1>Contact</h1>
   );
}
 
export default Contact;