import React from 'react';
import classes from './PostItem.module.css'


const PostItem = (props) => {
    let ava_post = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oX9ZCrY7zmZr_f9M5-tdZubbu6mfeKfckYExA2uIxht3DZ6S";
    return (
        <div className={classes.container}>
            <img
                src={ava_post}
                alt="ava"/>
            {props.msg}
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    );
};

export default PostItem