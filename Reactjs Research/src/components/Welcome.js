import React, {Component} from "react";

class Welcome extends Component{
    // eslint-disable-next-line react/require-render-return
    constructor(props) {
        super(props);
    }
    render() {
        const {name, children} = this.props
        const {state1, state2} = this.state
        return (
            <div>
                <h1>Welcome to</h1>
                {name}
                {children}
            </div>
        )
    }
}
export default Welcome;