import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// context
import { ViewContext } from './contexts/ViewContext';

// routes
//import { routes } from './routes/routes';

// layout
import Container from './components/grid/Container';
import Header from './components/page/Header';
import NavMain from './components/page/Nav/NavMain';
import Main from './components/page/Main';

// views
import Home from './components/views/Home';
import About from './components/views/About';
import Work from './components/views/Work';
import Contact from './components/views/Contact';
import Terms from './components/views/Terms';


const App = () => {
	const { currentView } = useContext(ViewContext);
	useEffect(() => {
		document.title = currentView;
	})
	return (
		<Container containerClass={currentView}>
			<Header headerClass={currentView}/>
			<NavMain navClass={currentView}/>
			<Main mainClass={currentView}>
				<Switch>
					<Route
						path='/'
						exact
						component={Home}
					/>
					<Route
						path='/about'
						component={About}
					/>
					<Route
						path='/work'
						component={Work}
					/>
												
					<Route
						path='/contact'
						component={Contact}
					/>
					<Route
						path='/terms'
						exact
						component={Terms}
					/>																		
				</Switch>
			</Main>
		</Container>
	);
}

export default App;
