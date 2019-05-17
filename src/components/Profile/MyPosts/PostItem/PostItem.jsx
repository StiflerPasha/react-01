import React from 'react';
import classes from './PostItem.module.css'
import ava_post from '../../../../assets/images/ava_post.jfif'


const PostItem = (props) => {
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