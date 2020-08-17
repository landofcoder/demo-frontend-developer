import React, { Component } from 'react'

class Tick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    componentWillMount() {
        clearInterval(this.interval)
    }
    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                {count}
            </div>
        )
    }
}

export default Tick
