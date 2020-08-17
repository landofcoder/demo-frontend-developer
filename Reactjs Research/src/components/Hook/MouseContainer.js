import React, { useState } from 'react'
import UseEffectOne from './UseEffectOne'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Click</button>
            {display && <UseEffectOne></UseEffectOne>}
        </div>
    )
}

export default MouseContainer
