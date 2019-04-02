import React from 'react';
import classes from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import MyPosts from '../Profile/MyPosts/MyPosts'


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <UserInfo name="Pasha" date="11.07.1992" city="Moscow" edu="DITB" site="--//--" />
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile