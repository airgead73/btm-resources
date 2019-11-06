import React, { useState } from 'react';

export const PiecesContext = React.createContext();

export const PiecesProvider = props => {
	const [pieces, setPieces] = useState([]);

	const getPieces = (newPieces) => {
		setPieces(newPieces);

	};

	return (
		<PiecesContext.Provider value={{ docTitle, level, changeLevel }}>
			{props.children}
		</PiecesContext.Provider>
	);
};