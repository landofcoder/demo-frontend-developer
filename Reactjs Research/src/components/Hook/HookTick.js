import React, { useState, useEffect } from 'react'

const HookTick = () => {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(previous => {
            return previous + 1
        })
    }
    useEffect(() => {
        console.log('useEffect is called');
        const interval = setInterval(tick, 1000)

        return (() => {
            clearInterval(interval)
        })
    }, [])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default HookTick
