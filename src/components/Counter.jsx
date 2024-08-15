import { useState } from 'react';

const Counter = () => {

    const [likes, setLikes] = useState(0)

    return (
        <>
            <h1>{likes}</h1>
            <button onClick={() => (setLikes(likes + 1))}>Increment</button>
            <button onClick={() => (setLikes(likes - 1))}>Decrement</button>
        </>
    )
}

export default Counter;