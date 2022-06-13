import React, {useRef, useState} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
        {id: 2, title: 'Javascript1', body: 'description'},
        {id: 3, title: 'Javascript2', body: 'description'},
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title='Post list 1'/>
        </div>
    );
}

export default App;
