import React from 'react';
import classes from './Profile.module.css'
import img from '../../parallax2.jpg'
import UserInfo from './UserInfo/UserInfo';
import MyPosts from '../Profile/MyPosts/MyPosts'


const Profile = () => {
    return (
        <div className={classes.content}>
            <img className={classes.content_top} src={img} alt="content" />
            <UserInfo date="11.07.1992" city="Moscow" edu="DITB" site="--//--" />
            <MyPosts />
        </div>
    );
};

export default Profile