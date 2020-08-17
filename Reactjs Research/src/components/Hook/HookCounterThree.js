import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })


    return (
        <div>
            {
                //setName not automatic merger new value , so need to use spread read to tell
                //it that get old value name then merge new value and show
            }
            <input 
                type="text"
                value={name.firstName}
                onChange={event => setName({...name, firstName: event.target.value})}
            />
            <input 
                type="text"
                value={name.lastName}
                onChange={event => setName({...name, lastName: event.target.value})}
            />
            <h1>Your first name is: {name.firstName}</h1>
            <h1>Your last name is: {name.lastName}</h1>
            <h1>{JSON.stringify(name)}</h1>
        </div>
    )
}

export default HookCounterThree
