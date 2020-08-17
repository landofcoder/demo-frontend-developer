import React from 'react'

const PropsHook = (props) => {

    return (
        <div>
            <h1>Hello, I am {props.name}</h1>
            <h1>I am {props.age} years old</h1>
            {props.children}
        </div>
    )
}

export default PropsHook
