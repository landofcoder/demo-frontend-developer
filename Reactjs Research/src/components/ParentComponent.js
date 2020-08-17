import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            parentName: 'Parent Component'
        }
    }
    greetParentComponent = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greet={this.greetParentComponent}></ChildComponent>
            </div>
        )
    }
}
export default ParentComponent