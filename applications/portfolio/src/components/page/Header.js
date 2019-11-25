import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '../../contexts/ViewContext';

const Header = ({ headerClass }) => {
	const { changeLevel } = useContext(ViewContext);
	return (
		<header className={`header-${headerClass}`}>
			<h1>
        <Link 
          to="/" 
          title="return to home page"
          onClick={() => {
            changeLevel('home', 'brian moneypenny');
          }}
        >
					btm
				</Link>
			</h1>
		</header>
	);
};

export default Header;
