import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
	const authContext = useContext(AuthContext);

	const { logout, isAuthenticated, user, token } = authContext;

	const onLogout = () => {
		logout();
		// clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li className="nav-item dropdown">
				<a
					className="nav-link dropdown-toggle"
					data-toggle="dropdown"
					href="#"
					id="user"
					aria-expanded="true"
				>
					{user && user.firstName} <span className="caret"></span>
				</a>
				<div className="dropdown-menu" aria-labelledby="user">
					<a className="dropdown-item" href="#!">
						<i className="fas fa-user-cog" /> Preferences
					</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href="#!" onClick={onLogout}>
						<i className="fas fa-sign-out-alt" /> Logout
					</a>
				</div>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li className="nav-item">
				<Link className="nav-link" to="/register">
					Register
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/login">
					Login
				</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<a className="navbar-brand" href="/">
					Mini <i className="fas fa-compress" /> URL
				</a>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse flex-grow-1 text-right"
					id="navbar"
				>
					<ul className="navbar-nav ml-auto flex-nowrap">
						{isAuthenticated && token ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
