import React, {Component} from "react";
import axios from "axios";

class PostForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <React.Fragment>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            placeholder={"User ID"}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input type="text"
                               name="title"
                               value={title}
                               placeholder={"Title"}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input type="text"
                               name="body"
                               value={body}
                               placeholder={"Body"}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}
export default PostForm