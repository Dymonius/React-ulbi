import React, {useRef, useState} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
        {id: 2, title: 'Javascript1', body: 'description'},
        {id: 3, title: 'Javascript2', body: 'description'},
    ]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        };
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый инпут*/}
                <MyInput onChange={e => setTitle(e.target.value)} value={title} placeholder='Post name'/>
                {/*неуправляемый инпут*/}
                <MyInput onChange={e => setBody(e.target.value)} value={body} placeholder='Post description'/>
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title='Post list 1'/>
        </div>
    );
}

export default App;
