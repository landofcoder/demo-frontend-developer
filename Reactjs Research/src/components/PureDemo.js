import React, { PureComponent } from 'react'

class PureDemo extends PureComponent {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log('Pure Component render')
        return (
            <div>
                <h1>Pure Component Demo {this.props.name}</h1>
            </div>
        )
    }
}

export default PureDemo
