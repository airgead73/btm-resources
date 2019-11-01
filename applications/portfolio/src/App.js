import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

// context
import { ViewContext } from './contexts/ViewContext';

// routes
import routes from './routes/routes';

// layout
import Container from './components/grid/Container';
import Header from './components/page/Header';
import NavMain from './components/page/Nav/NavMain';
import Main from './components/page/Main';


const App = () => {
	const { currentView } = useContext(ViewContext);
	return (
		<Container containerClass={currentView}>
			<Header/>
			<NavMain/>
			<Main>
				<Switch>
					{routes.map(route => {
						return (
							<Route
								key={route.path}
								path={route.path}
								exact={route.exact}
								view={route.view}
								render={route.render}
								component={route.component}
							/>
						)
					})}
				</Switch>
			</Main>
		</Container>
	);
}

export default App;
