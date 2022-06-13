import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h3>{props.post.id}. {props.post.title}</h3>
                <div>{props.post.body}</div>
            </div>
            <button>Delete</button>
        </div>
    );
};

export default PostItem;