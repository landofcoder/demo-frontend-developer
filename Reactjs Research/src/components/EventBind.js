import React, {Component} from "react";

class EventBind extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
    }
    // handler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }
    handler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.handler}>Click</button>
            </div>
        )
    }
}
export default EventBind