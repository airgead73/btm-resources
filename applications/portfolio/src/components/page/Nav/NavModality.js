import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../../contexts/ViewContext';

// data
import works from '../../../routes/routes';

const NavModality = ({ match }) => {
	const { changeLevel } = useContext(ViewContext);
	return (
		<ul>
			{works.map(({ name, id }) => (
				<li key={id}>
					<Link
						to={`${match.url}/${id}`}
						onClick={() => {
							changeLevel(`work modality_${name}`, `${name}`);
						}}
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavModality;
