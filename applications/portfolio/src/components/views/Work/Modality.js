import React from 'react';
import { Route } from 'react-router-dom';
import works from '../../../routes/routes';

// component
import Category from './Category';
import NavCategory from '../../page/Nav/NavCategory';

const Modality = ({ match }) => {
  const modality = works.find(({ id }) => id === match.params.modalityID)
	return (
    <React.Fragment>
      <h2>{modality.name}</h2>
      <p>{modality.description}</p>

      <NavCategory match={match} modality={modality}/>

      <Route path={`${match.path}/:categoryID`} render={(props) => (<Category {...props}/>)}/>
    </React.Fragment>
  
  );
};

export default Modality;