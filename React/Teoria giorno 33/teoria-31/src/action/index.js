import axios from 'axios'

export const deleteUser = (user) => {
    return { type: 'REMOVE_USER', payload: user }
}

export const addUser = (user) => {
    /* return { type: 'ADD_USER', payload: user } */
    // Con Redux Thunk ho la possibilità di fare controlli prima di emettere l'azione
    return function (dispatch, getState) {
        // getState ritorna lo stato contenuto nello store
        console.log(getState())
        // findIndex ricerca un oggetto in un array, se lo trova mi restituisce l'indice altrimenti -1
        // find ricerca un oggetto in un array, se lo trova mi restituisce l'indice altrimenti null
        if (getState().users.findIndex(u => u.email === user.email) < 0) {
            dispatch({ type: 'ADD_USER', payload: user })
        } else {
            console.log("Email già usata!!!")
        }
    }
}

export const getAllUsers = () => {
    // Con Redux Thunk ho la possibilità di fare chiamate asincrone prima di inviare un'azione
    return function (dispatch, getState) {    // function(dispatch, state)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return dispatch({ type: 'GET_ALL_USERS', payload: response.data })
            })
    }
}