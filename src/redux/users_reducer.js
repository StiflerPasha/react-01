const FOLLOW = 'FOLLOW';
const DESCRIBE = 'DESCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHECK_LOADING = 'CHECK_LOADING';


let initialState = {
	 users: [],

	 pageSize: 5,
	 totalUsersCount: 54,
	 currentPage: 1,
	 isLoading: true
};

const usersReducer = (state = initialState, action) => {
	 switch (action.type) {
			case FOLLOW:
				 return {
						...state,
						users: state.users.map(u => {
							 if (u.login.uuid === action.userID) {
									return {...u, followed: true}
							 }
							 return u;
						})
				 };
			case DESCRIBE:
				 return {
						...state,
						users: state.users.map(u => {
							 if (u.login.uuid === action.userID) {
									return {...u, followed: false}
							 }
							 return u;
						})
				 };
			case SET_USERS:
				 return {
						...state,
						users: [...action.users]
				 };
			case SET_CURRENT_PAGE:
				 return {
						...state,
						currentPage: action.page
				 };
			case CHECK_LOADING:
				 return {
						...state,
						isLoading: action.isLoading
				 };
			default:
				 return state;
	 }
};

export const follow = (userID) => ({type: FOLLOW, userID});
export const describe = (userID) => ({type: DESCRIBE, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const checkLoading = (isLoading) => ({type: CHECK_LOADING, isLoading});


export default usersReducer;