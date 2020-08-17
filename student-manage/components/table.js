import * as Bootstrap from "react-bootstrap";
import {useEffect, useState} from "react";
import Form from './form'
import React from "react";
import {createStore} from "redux";

const Table = () => {
    const [action, setAction] = useState({update: 0, delete: 1})
    const [showUpdate, updateToggle] = useState(false)
    const [students, setStudents] = useState([
        {id: 1, name: 'Nguyen Van A', birthday: '2000-07-11',  gender: 'male', phone: '0123'},
        {id: 2, name: 'Nguyen Van B', birthday: '2000-07-12',  gender: 'female', phone: '0124'},
        {id: 3, name: 'Nguyen Van C', birthday: '2000-07-13',  gender: 'male', phone: '0125'},
        {id: 4, name: 'Nguyen Van D', birthday: '2000-07-14',  gender: 'female', phone: '0126'},
        {id: 5, name: 'Nguyen Van E', birthday: '2000-07-15',  gender: 'male', phone: '0127'},
        {id: 6, name: 'Nguyen Van F', birthday: '2000-07-16',  gender: 'female', phone: '0128'},
        {id: 7, name: 'Nguyen Van I', birthday: '2000-07-17',  gender: 'male', phone: '0129'},
        {id: 8, name: 'Nguyen Van K', birthday: '2000-07-18',  gender: 'female', phone: '01210'},
        {id: 9, name: 'Nguyen Van L', birthday: '2000-07-19',  gender: 'male', phone: '01211'},
        {id: 10, name: 'Nguyen Van M', birthday: '2000-07-20',  gender: 'female', phone: '01212'}
    ])
    const [studentUpdate, changeStudentUpdate] = useState({})
    const clickHandler = (event) => {
        event.preventDefault()
        let array = [...students]
        if (confirm('Are you sure ?')) {
            array = array.filter((student) => {
                if (student.id != event.target.value) {
                    return student;
                }
            })
            updateToggle(false)
        }
        setStudents(array)
    }
    const updateClickHandler = (event) => {
        updateToggle(true)
        let array = [...students]
        array = array.filter((student) => {
            if (student.id == event.target.value) {
                return student;
            }
        })
        changeStudentUpdate(array[0])
    }
    const handler = () => {
        updateToggle(!showUpdate)
    }

    return (
        <React.Fragment>
            <Bootstrap.Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Student name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map(student => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.birthday}</td>
                                <td>{student.gender}</td>
                                <td>{student.phone}</td>
                                <td>
                                    <Bootstrap.Button
                                        variant='primary'
                                        value={student.id}
                                        onClick={updateClickHandler}
                                        name="update"
                                    >
                                        Update
                                    </Bootstrap.Button>
                                    <Bootstrap.Button
                                        variant='danger'
                                        value={student.id}
                                        onClick={clickHandler}
                                        name="delete"
                                    >
                                        Delete
                                    </Bootstrap.Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Bootstrap.Table>
            {showUpdate && <Form object={studentUpdate} handler={handler}></Form>}
        </React.Fragment>
    )
}
export default Table