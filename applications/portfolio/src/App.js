import React, { useEffect, useContext } from 'react';
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
import Work from './components/views/Work/Work';
import Contact from './components/views/Contact';
import Terms from './components/views/Terms';
import Seed from './components/views/Seed';


const App = () => {

	const { docTitle } = useContext(ViewContext);
	
	useEffect(() => {
		document.title = docTitle;
	},[docTitle]);

	return (
		<Container>
			<Header/>
			<NavMain/>
			<Main>
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
					<Route
						path='/seed'
						exact
						component={Seed}
					/>																							
				</Switch>
			</Main>
		</Container>
	);
}

export default App;
