import React, {useMemo, useRef, useState} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
        {id: 2, title: 'Javascript1', body: '1description'},
        {id: 3, title: 'Javascript2', body: '2description'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search...'
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={'Sort by'}
                    options={[
                        {value: 'title', name: 'name'},
                        {value: 'body', name: 'description'}
                    ]}
                />
            </div>
            {(sortedAndSearchedPosts.length > 0)
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post list 1'/>
                :
                <h1 style={{textAlign: "center"}}>No posts</h1>
            }
        </div>
    );
}

export default App;
