const GET_FOLLOWED_USERS = 'GET_FOLLOWED_USERS';

let initialState = {
	 friends: null
};

const friendsReducer = (state = initialState, action) => {
	 switch (action.type) {
			case GET_FOLLOWED_USERS:
				 return {
						...state, friends: action.friends
				 };
			default:
				 return state;
	 }
};

export const getFollowedUsers = (friends) => ({type: GET_FOLLOWED_USERS, friends});

export default friendsReducer