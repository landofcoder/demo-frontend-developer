import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color: 'red'
        }
    }
    componentDidUpdate() {
        setInterval(() => {
            this.setState({color: 'GREEN'})
        }, 1000)
    }
    handlerClick = (event) => {
        this.setState({color: event.target.value})
    }
    render() {
        const {color} = this.state
        return (
            <div>
                <button onClick={this.handlerClick} value="yellow">Change</button>
                <h1>My favorite color is {color} </h1>
            </div>
        )
    }
}

export default LifeCycle
