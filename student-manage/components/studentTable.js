import React, { useState } from 'react'
import {Table, Button, Modal, Form} from 'react-bootstrap'


const initialState = {id: '', name: '', birthday: '', gender: '', phone: ''}
const StudentTable = (props) => {
    const {studentList, studentClick, updateStudent} = props
    const [show, setShow] = useState(false);
    const [studentUpdate, setStudentUpdate] = useState(initialState)
    const handleClose = () => setShow(false);
    const handleShow = (student) => {
        setShow(true)
        setStudentUpdate(student)
    };
    const clickHandler = (student) => {
        if (studentClick) {
            if (window.confirm('Are you sure want to delete student?')) {
                studentClick(student)   
            }
        }
    }
    const onChangeUpdate = (event) => {
        event.preventDefault()
        setStudentUpdate({...studentUpdate, [event.target.name]: event.target.value})
    }
    const applyUpdate = (student) => {
        if (updateStudent) {
            updateStudent(student)
        }
        handleClose()
    }
    return (
        <div>
            <Table>
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
                        studentList.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.birthday}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.phone}</td>
                                    <td>
                                        <Button
                                            variant='primary'
                                            value={student.id}
                                            name="update"
                                            onClick={() => handleShow(student)}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant='danger'
                                            value={student.id}
                                            name="delete"
                                            onClick={() => clickHandler(student)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student </Modal.Title>
        </Modal.Header>
        <Form>
                <Modal.Body>
                    <Form.Control type='text' value={studentUpdate.name} name='name' onChange={onChangeUpdate}></Form.Control>
                    <br/>
                    <Form.Control type = 'date' value={studentUpdate.birthday} name='birthday' onChange={onChangeUpdate}></Form.Control>
                    <br/>
                    <Form.Control as='select' name='gender' value={studentUpdate.gender} onChange={onChangeUpdate}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>
                    <br/>
                    <Form.Control type='text' value={studentUpdate.phone} name='phone' onChange={onChangeUpdate}></Form.Control>
                    <br/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => applyUpdate(studentUpdate)}>
                    Update
                </Button>
                </Modal.Footer>
        </Form>
      </Modal>
        </div>
    )
}

export default StudentTable
