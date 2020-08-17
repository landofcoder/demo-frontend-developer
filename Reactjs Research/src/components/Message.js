import React from "react";

class Message extends React.Component{
    constructor() {
        super();
        this.state = {
            message: "Welcome NVM Vlog",
            action: "subscribe",
        }
    }
    changeMessage() {
        (this.state.action == 'subscribe')?
        this.setState({
            message: 'Thank you for subscribing',
            action: 'un_subscribe'
        }):this.setState({
            message: 'Welcome NVM Vlog',
            action: 'subscribe'
            })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.action}</button>
            </div>
        )
    }
}
export default Message