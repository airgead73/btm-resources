import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../../contexts/ViewContext';

const NavCategory = ({ match, modality }) => {
	const { changeLevel } = useContext(ViewContext);
	const { modalityID } = match.params;

	return (
		<ul>
			{modality.categories.map(category => (
				<li key={category.id}>
					<Link
						to={`${match.url}/${category.id}`}
						onClick={() => {
							changeLevel('c', `${modalityID} | ${category.name}`);
						}}
					>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavCategory;
