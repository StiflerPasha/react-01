import React, {Component} from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {getFollowedUsers} from "../../redux/friends_reducer";

class FriendsContainer extends Component {

	 componentDidMount() {
			let {getFollowedUsers, friends} = this.props;
			getFollowedUsers(friends)
	 }

	 render() {
			return (
				<Friends {...this.props}/>
			);
	 }
}

const mapStateToProps = (state) => {
	 return {
			friends: state.usersPage.users.filter(user => user.followed)
	 }
};

export default connect(mapStateToProps, {getFollowedUsers})(FriendsContainer);