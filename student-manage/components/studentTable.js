import React, { useState } from 'react'
import {Table, Button, Modal} from 'react-bootstrap'



const StudentTable = (props) => {
    const {studentList, studentClick} = props
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const clickHandler = (student) => {
        if (studentClick) {
            if (window.confirm('Are you sure want to delete student?')) {
                studentClick(student)   
            }
        }
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
                                            onClick={handleShow}
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default StudentTable
