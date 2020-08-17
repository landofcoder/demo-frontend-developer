import React from "react";
import {UserConsumer} from "./userContext";

class ComponentC extends React.Component {
    render() {
        return (
            <UserConsumer>
                {
                    (infomation) => {
                        return <h1>{infomation}</h1>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentC