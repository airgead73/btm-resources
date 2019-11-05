import React, { useContext, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { ViewContext } from '../../contexts/ViewContext';

const works = [
  {
    id: 'sculpture',
    name: 'sculpture',
    description: 'Works made with bronze, marble, and clay',
    pieces: [
      {
        id: 'scultpure01',
        name: 'oxen',
        material: 'bronze'
      },
      {
        id: 'scultpure02',
        name: 'railroad men',
        material: 'bronze'
      },
      {
        id: 'scultpure03',
        name: 'bronco',
        material: 'marble'
      }            
    ]
  },
  {
    id: 'painting',
    name: 'painting',
    description: 'Portraits, landscapes, and still life',
    pieces: [
      {
        id: 'painting01',
        name: 'San Juan Bautista',
        material: 'oil on canvas'
      },
      {
        id: 'painting02',
        name: 'sailing',
        material: 'oil on canvas'
      },
      {
        id: 'painting03',
        name: 'cathy',
        material: 'oil on canvase'
      }            
    ]
  } ,
  {
    id: 'drawing',
    name: 'drawing',
    description: 'Portraits, landscapes, and still life',
    pieces: [
      {
        id: 'drawing01',
        name: 'woman reclining',
        material: 'pen and ink'
      },
      {
        id: 'drawing02',
        name: 'house',
        material: 'charcoal'
      },
      {
        id: 'drawing03',
        name: 'quayle',
        material: 'charcoal'
      }            
    ]
  }    
];

const Piece = ({ match }) => {
  console.log("piece, ", match);
  const piece = works.find(({ id }) => id === match.params.modalityId)
  .pieces.find(({ id }) => id === match.params.pieceId);
 console.log(match);
  return (
    <h3>{piece.name}</h3>
  )
}

const Modality = ({ match }) => {
  console.log(match.params.pieceId);
  const modality = works.find(({ id }) => id === match.params.modalityId)
	return (
    <React.Fragment>
      <h2>{modality.name}</h2>
      <p>{modality.description}</p>

      <ul>
        {modality.pieces.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:pieceId`} component={Piece}/>
    </React.Fragment>
  
  );
};

const Work = ({ match }) => {
  const { changeView } = useContext(ViewContext);
  console.log("work, ", match);

	useEffect(() => {
		changeView('work');
	});

	return (
		<React.Fragment>
			<h1>Work</h1>
			<ul>
        {works.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
			</ul>
			<Route path={`${match.path}/:modalityId`} component={Modality} />
      <Route path={`${match.path}`} render={() => (<h4>Please select a work.</h4>)} exact/>
		</React.Fragment>
	);
};

export default Work;
