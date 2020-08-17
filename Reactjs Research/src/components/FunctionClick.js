import React from 'react'

export default function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Function click</button>
        </div>
    )
}
