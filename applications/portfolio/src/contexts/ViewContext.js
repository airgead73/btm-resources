import React, { useState } from 'react';

export const ViewContext = React.createContext();

export const ViewProvider = props => {
	const [level, setLevel] = useState('');
	const [docTitle, setTitle] = useState('home');

	const changeLevel = (newLevel, newTitle) => {
		setLevel(newLevel);
		setTitle(newTitle);
		// console.table({
		// 	level: newLevel,
		// 	title: newTitle
		// });
	};

	return (
		<ViewContext.Provider value={{ docTitle, level, changeLevel }}>
			{props.children}
		</ViewContext.Provider>
	);
};
