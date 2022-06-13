import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInput onChange={e => setPost({...post, title: e.target.value})}
                     value={post.title}
                     placeholder='Post name'
                     type='text'/>
            <MyInput onChange={e => setPost({...post, body: e.target.value})}
                     value={post.body}
                     placeholder='Post description'
                     type='text'/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;