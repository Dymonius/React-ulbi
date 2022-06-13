import React, {useRef, useState} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
        {id: 2, title: 'Javascript1', body: 'description'},
        {id: 3, title: 'Javascript2', body: 'description'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b)=>a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue={'Sort by'}
                options={[
                    {value: 'title', name: 'name'},
                    {value: 'body', name: 'description'}
                ]}
            />
            {(posts.length > 0)
                ?
                <PostList remove={removePost} posts={posts} title='Post list 1'/>
                :
                <h1 style={{textAlign: "center"}}>No posts</h1>
            }
        </div>
    );
}

export default App;
