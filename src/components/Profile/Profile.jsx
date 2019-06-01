import React from 'react';
import classes from './Profile.module.css'
import UserAvatar from './UserAvatar/UserAvatar';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";


const Profile = (props) => {
	 return (
		 <div className={classes.profile_page}>
				<UserAvatar
					className={classes.info}/>
				<UserInfo className={classes.data}
					name="Pasha"
					date="11.07.1992"
					city="Moscow"
					edu="DITB"
					site="--//--"/>
				<MyPostsContainer
					store={props.store}
					className={classes.posts}/>
		 </div>
	 );
};

export default Profile