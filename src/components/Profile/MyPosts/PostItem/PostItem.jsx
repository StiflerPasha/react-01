import React from 'react';
import classes from './PostItem.module.css'


const PostItem = (props) => {
    return (
        <div className={classes.container}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oX9ZCrY7zmZr_f9M5-tdZubbu6mfeKfckYExA2uIxht3DZ6S" alt="ava" />
            {props.msg}
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    );
}

export default PostItem