import React from 'react';
import classes from './MyPosts.module.css'
import PostItem from './PostItem/PostItem';


const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <PostItem key={p.id} msg={p.msg} like={p.like}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPostCreator();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextCreator(text);
    };

    return (
        <div className={[classes.container,
           classes.page_block,props.className].join(' ')}>
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