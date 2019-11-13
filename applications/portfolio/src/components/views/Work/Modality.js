import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import works from '../../../routes/routes';

// component
import Category from './Category';
import NavCategory from '../../page/Nav/NavCategory';

const Modality = ({ match }) => {
  const [ pieces, setPieces ] = useState([]);
  const modality = works.find(({ id }) => id === match.params.modalityID);
  const { categories } = modality;

  useEffect(() => {
    fetch(`https://us-central1-btm-resources.cloudfunctions.net/getModality?modality=${modality.id}`)
    .then(resp => resp.json())
    .then(data => {
      setPieces(data);
      console.log(data);
    })
  },[modality])

	return (
    <React.Fragment>
      <h2>{modality.id}</h2>

      {categories && (
        <React.Fragment>
          <NavCategory match={match} modality={modality}/>
          <Route path={`${match.path}/:categoryID`} render={(props) => (<Category {...props}/>)}/>
        </React.Fragment>
      )}

      {!categories && (
        <React.Fragment>
        <ul>
        {pieces.map(piece => {
          return (
            <li key={piece.id}>{piece.title} | {piece.medium}</li>
          )
        })}
        </ul>          
        </React.Fragment>
      )}  
    </React.Fragment>
  
  );
};

export default Modality;