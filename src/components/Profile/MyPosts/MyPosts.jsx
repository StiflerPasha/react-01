import React from 'react';
import classes from './MyPosts.module.css'
import PostItem from './PostItem/PostItem';


const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <PostItem key={p.id} msg={p.msg} like={p.like}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.container}>
            <h3>My Posts</h3>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      cols="50"
                      rows="3"
                      placeholder="Text"
                      value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>
            {postsElement}
        </div>
    );
};

export default MyPosts