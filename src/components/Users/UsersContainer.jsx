import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, describeAC} from "../../redux/users_reducer";
import React from "react";
import * as axios from "axios";


class UsersContainer extends React.Component {

	 componentDidMount() {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				 this.props.setUsers(response.data.items)
			});
	 }


	 render() {
			return (
				<Users users={this.props.users}
							 follow={this.props.follow}
							 describe={this.props.describe}/>
			)
	 }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);