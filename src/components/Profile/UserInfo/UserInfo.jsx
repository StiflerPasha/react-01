import React from 'react';
import classes from './UserInfo.module.css'


const UserInfo = (props) => {
    return (
        <div className={classes.user}>
            <img className={classes.avatar} src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" alt="avatar" />
            <div className={classes.info}>
                <h2>Name Lastname</h2>
                <ul>
                    <li>Date of birth: {props.date}</li>
                    <li>City: {props.city}</li>
                    <li>Education: {props.edu}</li>
                    <li>Web Site: {props.site}</li>
                </ul>
            </div>
        </div>
    );
}

export default UserInfo