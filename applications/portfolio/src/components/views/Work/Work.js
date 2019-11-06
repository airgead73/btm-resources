import React from 'react';
import { Route } from 'react-router-dom';

// component
import Modality from './Modality';
import NavModality from '../../page/Nav/NavModality';

const Work = ({ match }) => {

	return (
		<React.Fragment>
			<h1>Work</h1>
      <NavModality match={match}/>

			<Route path={`${match.path}/:modalityID`} render={(props) => (<Modality {...props}/>)} />
      <Route path={`${match.path}`} render={() => (<h4>Please select a work.</h4>)} exact/>
		</React.Fragment>
	);
};

export default Work;
