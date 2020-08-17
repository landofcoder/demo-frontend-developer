import React, { useEffect } from 'react'
import axios from "axios"
const CSS = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}

export default React.memo(CSS)
