import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ViewContext } from '../../../contexts/ViewContext';

const NavMain = () => {
	const { changeLevel } = useContext(ViewContext);
	return (
		<nav id="nav-primary">
			<ul>
				<li>
					<NavLink
						className="button"
						activeClassName="nav-active"
						to="/about"
						onClick={() => {
							changeLevel('about', 'about');
						}}
					>
						about
					</NavLink>
				</li>
				<li>
					<NavLink
						className="button"
						activeClassName="nav-active"
						to="/work"
						onClick={() => {
							changeLevel('work', 'work');
						}}
					>
						work
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavMain;
