import React from "react";
import Greeting from "./Greeting";
class LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }
    loginClick = () => {
        this.setState({
            loggedIn: true,
        })
    }
    logoutClick = () => {
        this.setState({
            loggedIn: false,
        })
    }
    render() {
        let button;
        let message;
        if (this.state.loggedIn == true) {
            button = <button onClick={this.logoutClick}>Logout</button>
            message = <Greeting status='1' name='Manh Nguyen Van'/>
        }
        else {
            button = <button onClick={this.loginClick}>Login</button>
            message = <Greeting status='0' />
        }
        return (
            <div>
                {button}
                {message}
            </div>
        )
    }
}
export default LoginControl;