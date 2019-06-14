import {authAPI} from "../api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_AUTH_LOADING = 'IS_AUTH_LOADING';


let initialState = {
	 id: null,
	 email: null,
	 login: null,
	 isLoading: true
};

const authReducer = (state = initialState, action) => {
	 switch (action.type) {
			case SET_USER_DATA:
				 return {
						...state,
						...action.data
				 };
			case IS_AUTH_LOADING:
				 return {
						...state,
						isLoading: action.isLoading
				 };
			default:
				 return state;
	 }
};

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});
export const checkLoading = (isLoading) => ({type: IS_AUTH_LOADING, isLoading});


// Thunk middleware
export const getAuth = () => {
	 return (dispatch) => {
			dispatch(checkLoading(true));
			authAPI.getAuth()
			.then(response => {
				 if (response.resultCode === 0) {
						dispatch(setAuthUserData(response.data));
				 }
				 dispatch(checkLoading(false));
			});
	 }
};

export default authReducer;