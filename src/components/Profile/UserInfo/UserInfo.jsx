import React from 'react';
import classes from './UserInfo.module.css'
import img from "../../../parallax2.jpg";


const UserInfo = (props) => {
    let avatar = "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg";
    return (
        <div>
            <img className={classes.img_top} src={img} alt="content"/>
            <div className={classes.info}>
                <img className={classes.avatar}
                     src={avatar} alt="avatar"/>
                <div>
                    <h2>Name: {props.name}</h2>
                    <ul>
                        <li>Date of birth: {props.date}</li>
                        <li>City: {props.city}</li>
                        <li>Education: {props.edu}</li>
                        <li>Web Site: {props.site}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserInfo