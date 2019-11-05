import React from 'react';
import { Route, Link } from 'react-router-dom';

// component
import Modality from './Modality';

// data
import works from './work.data';



const Work = ({ match }) => {

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
			<Route path={`${match.path}/:modalityId`} render={(props) => (<Modality {...props}/>)} />
      <Route path={`${match.path}`} render={() => (<h4>Please select a work.</h4>)} exact/>
		</React.Fragment>
	);
};

export default Work;
