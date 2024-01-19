// Soluzione senza toolkit

/* import { applyMiddleware, combineReducers, createStore } from 'redux' */
// Soluzione senza toolkit
/* import { thunk } from 'redux-thunk'
import usersReducer from '../reducers/users';
import cartReducer from '../reducers/cart'; */

/* const initialState = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        password: "Pa$$word",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        password: "Pa$$word",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        password: "Pa$$word",
        phone: "010-692-6593 x091654",
        website: "clementine.net",
    }
];

const state = {
    users: [],
    cart: []
} */

/* const bigReducers = combineReducers({
    users: usersReducer,
    cart: cartReducer
}) */

/* // createStore(storeReducer, initialState?, middleware?)
export const store = createStore(bigReducers, state, applyMiddleware(thunk))  */

// Con il Toolkit
import { configureStore } from '@reduxjs/toolkit'
import reducer from '../slice/usersSlice'

export const store = configureStore({
    reducer: { users: reducer }
})