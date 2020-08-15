import * as Boostrap from "react-bootstrap";
import {useDebugValue, useEffect, useState} from "react";
import React from "react";

const Table = () => {
    const [action, setAction] = useState({update: 0, delete: 1})
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
    const clickHandler = (event) => {
        event.preventDefault()
        let array = [...students]
        if (confirm('Are you sure ?'))
        array = array.filter((student) => {
            if (student.id != event.target.value) {
                return student;
            }
        })
        setStudents(array)
    }
    useEffect(() => {
        console.log('Effect be called')

    }, [action.delete])
    return (
        <React.Fragment>
            <Boostrap.Table striped bordered hover>
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
                                    <Boostrap.Button
                                        variant='primary'
                                        value={student.id}
                                        onClick={clickHandler}
                                        name="update"
                                    >
                                        Update
                                    </Boostrap.Button>
                                    <Boostrap.Button
                                        variant='danger'
                                        value={student.id}
                                        onClick={clickHandler}
                                        name="delete"
                                    >
                                        Delete
                                    </Boostrap.Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Boostrap.Table>
        </React.Fragment>
    )
}
export default Table