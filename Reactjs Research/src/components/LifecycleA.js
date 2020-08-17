import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Manh Nguyen'
        }
        console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null;
    }
    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                Lifecycle A
            </div>
        )
    }
}

export default LifecycleA
