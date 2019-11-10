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
						to="/"
						onClick={() => {
							changeLevel('a', 'home');
						}}
					>
						home
					</NavLink>
				</li>
				<li>
					<NavLink
						className="button"
						activeClassName="nav-active"
						to="/about"
						onClick={() => {
							changeLevel('a', 'about');
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
							changeLevel('a', 'work');
						}}
					>
						work
					</NavLink>
				</li>
				<li>
					<NavLink
						className="button"
						activeClassName="nav-active"
						to="/contact"
						onClick={() => {
							changeLevel('a', 'contact');
						}}
					>
						contact
					</NavLink>
				</li>
				<li>
					<NavLink
						className="button"
						activeClassName="nav-active"
						to="/terms"
						onClick={() => {
							changeLevel('a', 'terms');
						}}
					>
						terms
					</NavLink>
				</li>			
			</ul>
		</nav>
	);
};

export default NavMain;
