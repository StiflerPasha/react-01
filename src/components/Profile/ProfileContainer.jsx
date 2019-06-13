import React from 'react';
import classes from './Profile.module.css'
import UserAvatar from './UserAvatar/UserAvatar';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setUserProfile} from "../../redux/profile_reducer";


class ProfileContainer extends React.Component {

	 componentDidMount() {
			let id = this.props.match.params.id;
			let currentUser = this.props.users.filter(user => user.login.uuid === id);
			if (currentUser.length === 0) {
				 this.props.history.push("/profile")
			} else {
				 this.props.setUserProfile(...currentUser);
			}

	 }

	 render() {
			let {name, email, dob, location, picture} = this.props.profile;
			return (
				<div className={classes.profile_page}>
					 <UserAvatar className={classes.info}
											 ava={picture.large}/>
					 <UserInfo className={classes.data}
										 name={`${name.first} ${name.last}`}
										 date={dob.date}
										 city={location.city}
										 site={email}/>
					 <MyPostsContainer
						 className={classes.posts}/>
				</div>
			);
	 }
}

const mapStateToProps = (state) => ({
	 profile: state.profilePage.profile,
	 users: state.usersPage.users,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)