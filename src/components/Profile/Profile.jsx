import React from 'react';
import classes from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import MyPosts from '../Profile/MyPosts/MyPosts'


const Profile = () => {
    return (
        <div className={classes.content}>
            <UserInfo name="Pasha Stifler" date="11.07.1992" city="Moscow" edu="DITB" site="--//--" />
            <MyPosts />
        </div>
    );
};

export default Profile