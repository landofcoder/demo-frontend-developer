import React from "react";

const UpdateComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        printState = () => {
            console.log(this.state.count);
        }
        incrementCount = () => {
            this.setState((prev) => ({
                count: prev.count + 1
            }), this.printState)
        }
        render() {
            console.log(this.props.name);
            return (
                <OriginalComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props.name}
                />
            )
        }
    }
    return NewComponent
}

export default UpdateComponent;