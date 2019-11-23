import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import works from '../../../routes/routes';

// component
import Category from './Category';
import NavCategory from '../../page/Nav/NavCategory';

const BASE_URL = 'https://res.cloudinary.com/dpm/image/upload/w_750/l_text:Verdana_12_normal:%C2%A9%20Brian%20Moneypenny,g_south_east,y_8,x_8,co_rgb:FFFFFF/bmoneypenny/work/';
const Modality = ({ match }) => {
  const [ isLoading, setLoading ] = useState(true);
  const [ pieces, setPieces ] = useState([]);
  const modality = works.find(({ id }) => id === match.params.modalityID);
  const { categories } = modality;

  const getModality = (modality) => {
    fetch(`https://us-central1-btm-resources.cloudfunctions.net/getModality?modality=${modality}`)
    .then(resp => resp.json())
    .then(data => {
      const newData = data.map(item => ({
        src: BASE_URL + item.file,
        ...item 
      }));
      setPieces(newData);
    })
    .then(() => setLoading(false))    
  }

  useEffect(() => {
    categories ? setLoading(false) : getModality(modality.id);
  },[modality, isLoading])

	return (
    <React.Fragment>
      <h2>{modality.id}</h2>

      {isLoading && (
        <p>loading...</p>
      )}

      {categories && (
        <React.Fragment>
          <NavCategory match={match} modality={modality}/>
          <Route path={`${match.path}/:categoryID`} render={(props) => (<Category {...props}/>)}/>
        </React.Fragment>
      )}

      {!categories && (
        <React.Fragment>
        {pieces.map(piece => {
          return (
            <ul key={piece.id}>
              <li>{piece.title}</li>
              <li>{piece.src}</li>
              <li>{piece.alt}</li>
            </ul>
          )
        })}         
        </React.Fragment>
      )}  
    </React.Fragment>
  
  );
};

export default Modality;