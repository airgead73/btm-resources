import React from 'react';

// data
import works from './work.data';

const Category = ({ match }) => {
  const category = works.find(({ id }) => id === match.params.modalityID)
  .categories.find(({ id }) => id === match.params.categoryID);
  return (
    <React.Fragment>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </React.Fragment>
  )
}

export default Category;