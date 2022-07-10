import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth_reducer';
import alertReducer from './reducers/alert_reducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		alert: alertReducer,
	},
});
