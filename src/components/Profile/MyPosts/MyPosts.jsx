import React from 'react';
import classes from './MyPosts.module.css'
import PostItem from './PostItem/PostItem';


const MyPosts = () => {
    return (
        <div className={classes.container}>
            <h2>My Posts</h2>
            <textarea name="in_post" id="ta" cols="30" rows="2"></textarea>
            <button>Add post</button>
            <PostItem msg="Hi, how are you" like="12" />
            <PostItem msg="It's my first post" like="16" />
        </div>
    );
}

export default MyPosts