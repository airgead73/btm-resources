import React, { useContext, useEffect } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const About = () => {
  const { changeView } = useContext(ViewContext);

  useEffect(() => {
    changeView('about');
  },[changeView]);

  return ( 
    <h1>About</h1>
   );
}
 
export default About;