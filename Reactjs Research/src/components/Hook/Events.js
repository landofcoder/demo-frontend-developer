import React, { useState, useEffect } from 'react'

const Events = () => {
    const [keyCode, setKeyCode] = useState('')

    const keyPressHandler = (event) => {
        setKeyCode(String.fromCharCode(event.keyCode))
    }
    useEffect(() => {
        console.log('useEffect is called')
        window.addEventListener('keypress', keyPressHandler)
        return () => {
            window.removeEventListener('keypress', keyPressHandler)
        }
    }, [])
    return (
        <div>
            <h1>Key which you have just pressed is {keyCode}</h1>
        </div>
    )
}

export default Events
