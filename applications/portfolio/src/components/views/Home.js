import React, { useContext, useEffect } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

const Home = (props) => {
  const { changeView } = useContext(ViewContext);

  useEffect(() => {
    document.title = props.view;
    changeView(props.view);
  },[changeView]);

  return ( 
    <h1>{props.view}</h1>
   );
}
 
export default Home;