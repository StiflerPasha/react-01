import React from 'react';
import classes from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <UserInfo
                name="Pasha"
                date="11.07.1992"
                city="Moscow"
                edu="DITB"
                site="--//--" />
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile