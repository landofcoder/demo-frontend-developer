import React, {useState, useEffect} from 'react'
import axios from "axios"

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setID] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response);
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])
    return (
        <div>
            <input 
                type='text'
                value={id}
                onChange={event => setID(event.target.value)}
                />
                <br/>
            {id + '->' + post.title}
        </div>
    )
}

export default DataFetching
