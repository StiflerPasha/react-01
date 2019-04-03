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

                    <div>Date of birth: {props.date}</div>
                    <div>City: {props.city}</div>
                    <div>Education: {props.edu}</div>
                    <div>Web Site: {props.site}</div>

                </div>
            </div>
        </div>
    );
};

export default UserInfo