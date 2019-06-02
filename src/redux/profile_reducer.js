const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
	 profile: {
			name: {
				 first: "Pasha",
				 last: "Stifler"
			},
			dob: {
				 date: "11.07.1992"
			},
			email: "pashastifler@gmail.com",
			location: {
				 city: "Donetsk"
			},
			picture: {
				 large: "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg",
				 medium: "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg",
				 thumbnail: "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"
			}
	 },
	 posts: [
			{id: 1, msg: "Hi, how are you", like: 12},
			{id: 2, msg: "It's my first post", like: 5},
	 ],
	 newPostText: "Pasha Stifler"
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
			default:
				 return state;
	 }
};

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (newProfile) => ({type: SET_USER_PROFILE, newProfile});

export default profileReducer;