import React from 'react';
import classes from './MyPosts.module.css'
import PostItem from './PostItem/PostItem';


const MyPosts = () => {
    let posts = [
        {id: "1", msg: "Hi, how are you", like: "12"},
        {id: "2", msg: "It's my first post", like: "5"},
        {id: "3", msg: "It's my second post", like: "11"},
        {id: "4", msg: "It's my third post", like: "87"},
    ];

    let postsElement = posts.map(p => <PostItem msg={p.msg} like={p.like} />);

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