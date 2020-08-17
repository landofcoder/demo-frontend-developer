import React from "react";

class FormHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    changeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    submitClick = (event) => {
        window.alert(`${this.state.email}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form action='' method='post' onSubmit={this.submitClick}>
                    <label>Email</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.changeHandler} required/> <br/>
                    <h4>{this.state.email}</h4>
                    <label>Password</label>
                    <input type='password' name='password' required/> <br/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
export default FormHandler;