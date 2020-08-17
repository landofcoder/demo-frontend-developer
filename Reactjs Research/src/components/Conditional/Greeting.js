import React from "react";

class Greeting extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let message;
        if (this.props.status == 1) {
            message = <h1>Hello, {this.props.name}</h1>
        }
        else {
            message = <h1>Please login</h1>
        }
        return (
                message
        )
    }
}
export default Greeting;