import React, { useContext, useEffect } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Home = () => {
  const { changeView } = useContext(ViewContext);

  useEffect(() => {    
    changeView('home');
  },[changeView]);

  return ( 
    <React.Fragment>
    <h1>Home</h1>
    </React.Fragment>

   );
}
 
export default Home;