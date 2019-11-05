import React from 'react';
import { Link, Route } from 'react-router-dom';
import works from './work.data';

// component
import Piece from './Piece';

const Modality = ({ match }) => {
  const modality = works.find(({ id }) => id === match.params.modalityId)
	return (
    <React.Fragment>
      <h2>{modality.name}</h2>
      <p>{modality.description}</p>

      <ul>
        {modality.categories.map((category) => (
          <li key={category.id}>
            <Link to={`${match.url}/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:pieceId`} render={(props) => (<Piece {...props}/>)}/>
    </React.Fragment>
  
  );
};

export default Modality;