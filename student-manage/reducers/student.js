const initialState = {
    list: [
        {id:1, name: 'Nguyen Van A', birthday: '2000-07-11', gender: 'Male', phone: '0123'},
        {id:2, name: 'Nguyen Van B', birthday: '2000-07-12', gender: 'Male', phone: '0123'},
        {id:3, name: 'Nguyen Van C', birthday: '2000-07-13', gender: 'Male', phone: '0123'},
        {id:4, name: 'Nguyen Van D', birthday: '2000-07-14', gender: 'Male', phone: '0123'},
        {id:5, name: 'Nguyen Van E', birthday: '2000-07-15', gender: 'Male', phone: '0123'},
        {id:6, name: 'Nguyen Van F', birthday: '2000-07-16', gender: 'Male', phone: '0123'},
        {id:7, name: 'Nguyen Van G', birthday: '2000-07-17', gender: 'Male', phone: '0123'},
    ],
    deleteId: null,
}
const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT': {
            const listClone = [...state.list]
            listClone.push(action.payload)
            
            return {
                ...state,   
                list: listClone
            }
        }
        case 'DEL_STUDENT': {
            const id = action.payload.id
            let listClone = [...state.list]
            listClone = listClone.filter(item => {
                if (item.id != id) {
                    return item;
                }
            })
            return {
                ...state,
                list: listClone
            }
        }
        case 'UPDATE_STUDENT': {
            const id = action.payload.id
            console.log('ACTION ', action)
            let listClone = [...state.list]
            listClone = listClone.map(item => {
                if (item.id != id) {
                    return item;
                }
                else  return action.payload;
            })
            console.log(listClone)
            return {
                ...state,
                list: listClone
            }
        }
        default:
            return state;
    }
}
export default studentReducer