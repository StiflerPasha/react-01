import React from 'react';
import classes from './MyPosts.module.css'
import PostItem from './PostItem/PostItem';


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <PostItem msg={p.msg} like={p.like} />);

    return (
        <div className={classes.container}>
            <h3>My Posts</h3>
            <textarea cols="50" rows="3" placeholder="Text"/>
            <button>Add post</button>
            {postsElement}
        </div>
    );
};

export default MyPosts