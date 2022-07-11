import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../store/actions/friends_actions';
import { store } from '../store/store';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
	const jwtToken = userDetails.token;
	socket = io('http://localhost:5000', {
		auth: {
			token: jwtToken,
		},
	});

	socket.on('connect', () => {
		console.log('Successfully connected with socket.io server');
		console.log(socket.id);
	});

	socket.on('friends-invitations', (data) => {
		const { pendingInvitations } = data;
		console.log('Friends invations event came');
		console.log(pendingInvitations);
		store.dispatch(setPendingFriendsInvitations(pendingInvitations));
	});
};
