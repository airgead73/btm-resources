import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

// context
import { ViewContext } from './contexts/ViewContext';

// routes


// layout

const App = () => {
	const { currentView } = useContext(ViewContext);
	return <h1>portfolio</h1>;
}

export default App;
