import React from 'react';
import classes from './MyPosts.module.css'
import PostItem from './PostItem/PostItem';


const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <PostItem key={p.id} msg={p.msg} like={p.like}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={[classes.container,
           classes.page_block,props.className].join(' ')}>
            <h3>My Posts</h3>
            <textarea onChange={onPostChange}
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