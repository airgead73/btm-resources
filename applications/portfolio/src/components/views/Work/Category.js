import React, { useState, useEffect } from 'react';

const Category = ({ match }) => {
  const [ pieces, setPieces ] = useState([]);
  const { modalityID, categoryID} =  match.params;

  useEffect(() => {
    fetch(`https://us-central1-btm-resources.cloudfunctions.net/getCategory?modality=${modalityID}&category=${categoryID}`)
    .then(resp => resp.json())
    .then(data => {
      setPieces(data);
    })
  }, [categoryID])
  return (
    <React.Fragment>
      <h3>{modalityID} | {categoryID}</h3>
      <ul>
        {pieces.map(piece => {
          return (
            <li key={piece.id}>{piece.title} | {piece.medium}</li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default Category;