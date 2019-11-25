import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../contexts/ViewContext';

const Footer = ({ footerClass }) => {
	const { changeLevel } = useContext(ViewContext);
	return (
		<footer className={`footer-${footerClass}`}>
			<ul>
				<li>&copy; Brian Moneypenny</li>
				<li>
					<Link
						to="/contact"
						onClick={() => {
							changeLevel('contact', 'contact');
						}}
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						to="/terms"
						onClick={() => {
							changeLevel('terms', 'terms');
						}}
					>
						Terms of Use
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
