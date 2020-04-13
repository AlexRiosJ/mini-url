import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.miniUrlToken) {
	setAuthToken(localStorage.miniUrlToken);
}

const App = () => {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={Home} />
								{/* <Route exact path='/about' component={About} /> */}
								<PrivateRoute exact path='/register' component={Register} />
								{/* <PrivateRoute exact path='/login' component={Login} /> */}
								{/* <Route component={NotFound} /> */}
							</Switch>
						</div>
						
					</Fragment>
				</Router>
			</AlertState>
		</AuthState>
	);
};

export default App;
