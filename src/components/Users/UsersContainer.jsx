import {connect} from "react-redux";
import UsersClass from "./UsersClass";
import {followAC, setUsersAC, describeAC} from "../../redux/users_reducer";

const mapStateToProps = (state) => {
	 return {
			users: state.usersPage.users
	 }
};

const mapDispatchToProps = (dispatch) => {
	 return {
			follow: (userID) => {
				 dispatch(followAC(userID));
			},
			describe: (userID) => {
				 dispatch(describeAC(userID));
			},
			setUsers: (users) => {
				 dispatch(setUsersAC(users));
			},
	 }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer