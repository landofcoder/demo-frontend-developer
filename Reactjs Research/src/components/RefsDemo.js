import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sayings: ""
        }
        this.username = React.createRef()
    }
    updateInput = (event) => {
        this.setState({
            'sayings': this.username.current.value
        })
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.username} onChange={this.updateInput}/>
                <h1>{this.state.sayings}</h1>
            </div>
        )
    }
}

export default RefsDemo
