import React, {useState} from "react";
import * as Bootstrap from 'react-bootstrap'

const Form = (props) => {
    const [student, setStudent] = useState(props.object)
    const changeNameEvent = (event) => {
        event.preventDefault()
        setStudent({...student, [event.target.name]: event.target.value})
    }
    return (
        <Bootstrap.Container>
            <Bootstrap.FormGroup>
                <Bootstrap.FormControl
                    type='text'
                    value={student.name}
                    name='name'
                    onChange={changeNameEvent}
                    placeholder='Student name...'
                >
                </Bootstrap.FormControl>
                <Bootstrap.Button variant='success' type='submit'>Update</Bootstrap.Button>
                <Bootstrap.Button variant='danger' type='button' onClick={props.handler}>Cancel</Bootstrap.Button>
            </Bootstrap.FormGroup>
        </Bootstrap.Container>
    )
}
export default Form