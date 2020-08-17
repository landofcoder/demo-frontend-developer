import React from "react";

const ChildComponent = (props) => {
    const {greet} = props
    return (
        <div>
            <button onClick={() => greet('Nguyen Van Manh')}>Greet Parent Component</button>
        </div>
    )
}
export default ChildComponent