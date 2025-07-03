import { useEffect, useState } from "react";
import axios from "axios"
function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(function(){ //useEffect is called after rendering
        //it is called after every render
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data));
    }, []);
    return (
        <div>
            <h1>All posts</h1>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
}

export default Posts;