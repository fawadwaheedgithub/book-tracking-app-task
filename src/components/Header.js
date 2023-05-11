import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const history = useNavigate();

	return (
		<header id="app-header">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand onClick={() => history('/')}>
					Book Tracking App
				</Navbar.Brand>
				<Button onClick={() => history('/my-reading-list')}>
					My Reading List
				</Button>
			</Navbar>
		</header>
	);
};

export default Header;
