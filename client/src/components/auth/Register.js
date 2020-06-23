import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alerts from '../layouts/Alerts';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { loadUser, register, clearErrors, error } = authContext;

	useEffect(() => {
		loadUser();
		if (error === 'User already exists.') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error]);

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: ''
	});

	const { firstName, lastName, email, password, password2 } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (
			firstName === '' ||
			lastName === '' ||
			email === '' ||
			password === ''
		) {
			setAlert('Please enter all fields.', 'danger');
		} else if (password !== password2) {
			setAlert('Password does not match.', 'danger');
		} else {
			register({
				firstName,
				lastName,
				email,
				password
			});
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={onSubmit}>
				<h2 className="mb-4">Register</h2>
				<Alerts />
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label className="form-control-label" htmlFor="firstName">
								First name
							</label>
							<input
								type="text"
								name="firstName"
								placeholder="Enter first name"
								className="form-control"
								value={firstName}
								onChange={onChange}
								id="firstName"
								required
							/>
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label className="form-control-label" htmlFor="lastName">
								Last name
							</label>
							<input
								type="text"
								name="lastName"
								placeholder="Enter last name"
								className="form-control"
								value={lastName}
								onChange={onChange}
								id="lastName"
								required
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label className="form-control-label" htmlFor="email">
						Email address
					</label>
					<input
						type="email"
						name="email"
						placeholder="Enter email"
						className="form-control"
						value={email}
						onChange={onChange}
						id="email"
						required
					/>
				</div>
				<div className="form-group">
					<label className="form-control-label" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter password"
						className="form-control"
						value={password}
						onChange={onChange}
						id="password"
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label className="form-control-label" htmlFor="password2">
						Confirm password
					</label>
					<input
						type="password"
						name="password2"
						placeholder="Confirm password"
						className="form-control"
						value={password2}
						onChange={onChange}
						id="password2"
						required
						minLength="6"
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn btn-secondary btn-block my-4"
				/>
			</form>
			<p className="text-center">
				Already have an account? <a href="/login">Login here</a>.
			</p>
		</div>
	);
};

export default Register;
