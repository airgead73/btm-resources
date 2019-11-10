import React, { useState } from 'react';
import db from '../firebase/db';

export const PiecesContext = React.createContext();

export const PiecesProvider = props => {
  const [hasPieces, setHasPieces] = useState(false);
	const [pieces, setPieces] = useState([]);

	const getPieces = () => {
		if(hasPieces) {
      return;
    } else {
      const unsubsribe = db
      .collection()
    }

	};

	return (
		<PiecesContext.Provider value={{ docTitle, level, changeLevel }}>
			{props.children}
		</PiecesContext.Provider>
	);
};