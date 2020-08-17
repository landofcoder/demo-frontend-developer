import React, {Component} from "react";
import axios from "axios"
class PostList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>Post List</h1>
                {
                    posts.length?
                        posts.map(post => {return <div key={post.id}>{post.title}</div>}):
                        null
                }
            </div>
        );
    }
}
export default PostList