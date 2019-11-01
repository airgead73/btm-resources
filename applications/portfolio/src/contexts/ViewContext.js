import React, { useState } from 'react';

export const ViewContext = React.createContext();

export const ViewProvider = props => {
	const [currentView, setView] = useState('');

	const changeView = newView => {
		setView(newView);
	};

	return (
		<ViewContext.Provider value={{ currentView, changeView }}>
			{props.children}
		</ViewContext.Provider>
	);
};
