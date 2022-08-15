import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware} from 'redux';

import { fetchUsers } from "./Reducer";
import userReducer from './Reducer';

const store = configureStore({
    reducer: {
        user: userReducer
    }
},
    applyMiddleware(thunkMiddleware)
)

export default store

store.dispatch(fetchUsers())
store.subscribe(() => {console.log(store.getState())})