//import photo from '../ava_post.jfif'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []/*[
        {
            id: 1, photoURL: photo, followed: true, fullName: 'Pasha S.', status: 'I am a boss',
            location: {city: 'Donetsk', country: 'Ukraine'}
        },
        {
            id: 2, photoURL: photo, followed: false, fullName: 'Katya V.', status: 'Like a football',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3, photoURL: photo, followed: true, fullName: 'Abraham D.', status: 'Confused',
            location: {city: 'Paris', country: 'France'}
        }
    ],*/

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;