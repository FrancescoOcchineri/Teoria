import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    cart: []
}

export const getAllUsers = createAsyncThunk("users/fetchList", () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) { throw new Error(response.statusText) }
            else { return response.data }
        })
})

// Lo slice è un elemento composto da nome, stato iniziale, reducers, azioni extrareducers
export const getAllUsers = createAsyncThunk("users/fetch", async () => {

})

const { reducer, actions } = usersSlice
export const { addUser, deleteUser } = actions;
export default reducer
