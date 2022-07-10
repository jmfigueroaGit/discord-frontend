import * as api from '../../api';
import { openAlertMessage } from './alert_actions';

export const authAction = {
	SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
	return {
		login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
		register: (userDetails, navigate) =>
			dispatch(register(userDetails, navigate)),
	};
};

const setUserDetails = (userDetails) => {
	return {
		type: authAction.SET_USER_DETAILS,
		userDetails,
	};
};

const login = (userDetails, navigate) => {
	return async (dispatch) => {
		const response = await api.login(userDetails);

		if (response.error) {
			// Show error message in alert
			dispatch(openAlertMessage(response?.exception?.response?.data));
		} else {
			const { userDetails } = response?.data;
			localStorage.setItem('user', JSON.stringify(userDetails));

			dispatch(setUserDetails(userDetails));
			navigate('/dashboard');
		}
	};
};

const register = (userDetails, navigate) => {
	return async (dispatch) => {
		const response = await api.register(userDetails);

		if (response.error) {
			// Show error message in alert
			dispatch(openAlertMessage(response?.exception?.response?.data));
		} else {
			const { userDetails } = response?.data;
			localStorage.setItem('user', JSON.stringify(userDetails));

			dispatch(setUserDetails(userDetails));
			navigate('/dashboard');
		}
	};
};
