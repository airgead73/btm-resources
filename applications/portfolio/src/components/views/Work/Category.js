import React, { useState, useEffect } from 'react';
import GalleryContainer from './GalleryContainer';

const BASE_URL = 'https://res.cloudinary.com/dpm/image/upload/w_750/l_text:Verdana_12_normal:%C2%A9%20Brian%20Moneypenny,g_south_east,y_8,x_8,co_rgb:FFFFFF/bmoneypenny/work/';

const Category = ({ match }) => {
  const [ isLoading, setLoading ] = useState(true);
  const [ pieces, setPieces ] = useState([]);
  const { modalityID, categoryID} =  match.params;

  const getCategory = (modality, category) => {
    fetch(`https://us-central1-btm-resources.cloudfunctions.net/getCategory?modality=${modality}&category=${category}`)
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
    getCategory(modalityID, categoryID)
  }, [categoryID, isLoading])


  return (
    <React.Fragment>
      <h3>{modalityID} | {categoryID}</h3>
      <GalleryContainer photos={pieces}/>

    </React.Fragment>
  )
}

export default Category;