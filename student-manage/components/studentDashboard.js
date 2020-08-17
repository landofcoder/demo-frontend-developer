import React, { useState } from 'react'
import {Table, Button, Modal, Form, FormGroup} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import StudentTable from './studentTable'
import { addNewStudent, deleteStudent } from '../actions/student'

const StudentDashboard = () => {
    const initialState = {id: Math.floor(Math.random()*1000 + 1), name: '', birthday: '', gender: '', phone: ''}
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState(initialState)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const studentList = useSelector(state => state.student.list)
    const dispatch = useDispatch()
    const addStudentClick = () => {
        const newStudent = info
        const action = addNewStudent(newStudent)
        dispatch(action)
        setInfo(initialState)
        document.querySelector('#add').reset()
        handleClose()
    }
    const onChangeHandler = (event) => {
        event.preventDefault()
        setInfo({...info, [event.target.name]: event.target.value})
    }
    const studentClick = (student) => {
        const action = deleteStudent(student)
        dispatch(action)
    }
    
    const update = (student) => {
        
    }
    return (
        <div>
            
            <h1>Student Dashboard</h1>
            <StudentTable studentList={studentList} studentClick={studentClick}></StudentTable>

            <Button variant="primary" onClick={handleShow}>
                Add Student
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New Student</Modal.Title>
                </Modal.Header>
                <Form id="add">
                    <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Student name</Form.Label>
                        <Form.Control type="text" placeholder="Student name..." name='name' onChange={onChangeHandler} value={info.name}/>
                        <Form.Text className="text-muted">
                        Not allow contain numeric and special character
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" name='birthday' onChange={onChangeHandler} value={info.birthday}/>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Male"
                            value="Male"
                            name="gender"
                            id="option1"
                            onChange={onChangeHandler}
                            /* checked={info.gender == 'Male'?"checked":''} */
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            value="Female"
                            name="gender"
                            id="option2"
                            /* checked={info.gender == 'Female'?"checked":''} */
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Student phone</Form.Label>
                        <Form.Control type="text" placeholder="Student phone..." name='phone' value={info.phone} onChange={onChangeHandler}/>
                        <Form.Text className="text-muted">
                        Not allow contain letter and special character
                        </Form.Text>
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={addStudentClick}>
                        Apply
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default StudentDashboard
