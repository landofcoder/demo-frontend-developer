import React from "react";
import UpdateComponent from "./withCounter";

class ClickCounter extends React.Component{

    render() {
        const {count, incrementCount} = this.props
        return (
            <button
                onClick={incrementCount}
            >
                Click {count} times
            </button>
        )
    }
}
export default UpdateComponent(ClickCounter)