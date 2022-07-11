import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth_reducer';
import alertReducer from './reducers/alert_reducer';
import friendsReducer from './reducers/friends_reducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		alert: alertReducer,
		friends: friendsReducer,
	},
});
