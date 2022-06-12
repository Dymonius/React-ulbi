import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('test');

    function inc() {
        setLikes(likes + 1);
    }

    function dec() {
        setLikes(likes - 1);
    }

    return (
        <div className="App">
            <h1>{likes}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
}

export default App;
