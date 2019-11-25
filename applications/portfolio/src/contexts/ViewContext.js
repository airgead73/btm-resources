import React, { useState } from 'react';

export const ViewContext = React.createContext();

export const ViewProvider = props => {
	const [viewClass, setViewClass] = useState('home');
	const [docTitle, setTitle] = useState('brian moneypenny');

	const changeLevel = (newClass, newTitle) => {
		setViewClass(newClass);
		setTitle(newTitle);
		console.table({
			viewClass: newClass,
			title: newTitle
		});
	};

	return (
		<ViewContext.Provider value={{ docTitle, viewClass, changeLevel }}>
			{props.children}
		</ViewContext.Provider>
	);
};
