import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {
    // const [posts, setPost] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((error) => {
                console.error('Error occurred 💥: ' + error)
            })
    }, [id])

    return (
        <div>
            {/* Fetch data indivisibly */}
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <h1>{post.title}</h1>
            {/* fetch the data */}
            {/* <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul> */}
        </div>
    )
}

export default DataFetching