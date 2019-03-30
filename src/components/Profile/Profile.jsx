import React from 'react';
import classes from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import MyPosts from '../Profile/MyPosts/MyPosts'


const Profile = () => {
    return (
        <div className={classes.content}>
            <img className={classes.content_top} src="http://d1hkwj6qq9t78x.cloudfront.net/static/ui/SiteSunset.jpg" alt="content" />
            <UserInfo date="11.07.1992" city="Moscow" edu="DITB" site="--//--" />
            <MyPosts />
        </div>
    );
}

export default Profile