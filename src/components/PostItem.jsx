import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h3>{props.number}. {props.post.title}</h3>
                <div>{props.post.body}</div>
            </div>
            <MyButton onClick={() => {
                props.remove(props.post)
            }}>Delete</MyButton>
        </div>
    );
};

export default PostItem;