import React from "react";

export const Greeet = (props) => {
    // console.log(name)
    const {name, children} = props
    return (
        <div>
            <h1>Hello {name}</h1>
            {children}
        </div>
    )
}