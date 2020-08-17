import React, { useState } from 'react'

const StateHook = () => {
    const [count, setCount] = useState(0)

    const jumpFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((previous) => previous + 1)
        }
    }
    return (
        <div>
            <button onClick={jumpFive}>State value is {count}</button>
        </div>
    )
}

export default StateHook
