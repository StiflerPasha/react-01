import {profileAPI} from "../api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const IS_PROFILE_LOADING = 'IS_PROFILE_LOADING';

let initialState = {
	 profile: [],
	 posts: [
			{id: 1, msg: "Hi, how are you", like: 12},
			{id: 2, msg: "It's my first post", like: 5},
	 ],
	 newPostText: "",
	 isLoading: true
};

const profileReducer = (state = initialState, action) => {
	 switch (action.type) {
			case ADD_POST: {
				 let newPost = {
						id: state.posts.length + 1,
						msg: state.newPostText,
						like: 0,
				 };
				 return {
						...state,
						posts: [...state.posts, newPost],
						newPostText: ""
				 }
			}
			case UPDATE_NEW_POST_TEXT: {
				 return {
						...state,
						newPostText: action.newText
				 }
			}
			case SET_USER_PROFILE: {
				 return {
						...state,
						profile: action.newProfile
				 }
			}
			case IS_PROFILE_LOADING:
				 return {
						...state,
						isLoading: action.isLoading
				 };
			default:
				 return state;
	 }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (newProfile) => ({type: SET_USER_PROFILE, newProfile});
export const checkLoading = (isLoading) => ({type: IS_PROFILE_LOADING, isLoading});

// Thunk middleware
export const getProfile = (id) => {
	 return (dispatch) => {
			dispatch(checkLoading(true));
			profileAPI.getProfile(id)
			.then(data => {
				 dispatch(setUserProfile(data));
				 dispatch(checkLoading(false));
			});
	 }
};

export default profileReducer;