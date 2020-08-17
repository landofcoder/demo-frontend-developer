export const addNewStudent = (student) => {
    return {
        type: 'ADD_STUDENT',
        payload: student
    }
}
export const deleteStudent = (student) => {
    return {
        type: 'DEL_STUDENT',
        payload: student
    }
}
export const updateStudent = (student) => {
    return {
        type: 'UPDATE_STUDENT',
        payload: student
    }
}