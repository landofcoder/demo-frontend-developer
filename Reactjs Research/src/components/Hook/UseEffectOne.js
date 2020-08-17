import React, {useState, useEffect} from 'react'

const UseEffectOne = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const logMousePosition = event => {
        console.log('logMousePosition is called');
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(() => {
        console.log('useEffect is called');
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hook X - {x}, Y - {y}
        </div>
    )
}

export default UseEffectOne
