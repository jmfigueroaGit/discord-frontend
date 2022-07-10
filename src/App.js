import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import LoginPage from './pages/authPages/LoginPage/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage/RegisterPage';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';
import AlertNotification from './shared/components/AlertNotification';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route
						path="/"
						element={<Navigate to="/dashboard" replace={true} />}
					/>
				</Routes>
			</Router>
			<AlertNotification />
		</>
	);
}

export default App;
