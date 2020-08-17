import React, { useState } from 'react'

const Form = () => {
    const [credential, setCredential] = useState({username: '', password: '', region: 'en', gender: ''})
    const updateCredential = (event) => {
        setCredential({
            ...credential,
            [event.target.name]: event.target.value
        })
    }
    const showCredential = (event) => {
        event.preventDefault()
        console.log(credential)
    }
    return (
        <div>
            <form onSubmit={showCredential}>
                <label>
                    <input
                        type="text"
                        placeholder="Username..."
                        name="username"
                        onChange={updateCredential}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="password"
                        placeholder="Password..."
                        name="password"
                        onChange={updateCredential}
                    />
                </label>
                <br/>
                <select name="region" onChange={updateCredential}>
                    <option value="en">England</option>
                    <option value="jp">Japan</option>
                    <option value="vn">Viet Nam</option>
                </select>
                <br/>
                <label>
                <input type="radio" name="gender" value="male" onChange={updateCredential}/>
                Male
                </label>
                <label>
                <input type="radio" name="gender" value="female" onChange={updateCredential}/>
                Female
                </label>
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Form
