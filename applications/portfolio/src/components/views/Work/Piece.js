import React from 'react';

// data
import works from './work.data';

const Piece = ({ match }) => {
  const category = works.find(({ id }) => id === match.params.modalityId)
  .categories.find(({ id }) => id === match.params.pieceId);
  return (
    <React.Fragment>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </React.Fragment>
  )
}

export default Piece;