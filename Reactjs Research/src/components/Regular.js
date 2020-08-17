import React, { Component } from 'react'

class Regular extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log('Regular Component render')
        return (
            <div>
                <h1>Regular Component {this.props.name}</h1>
            </div>
        )
    }
}

export default Regular
