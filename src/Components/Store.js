import { configureStore } from "@reduxjs/toolkit";
import { fetchUsers } from "./Reducer";
import userReducer from './Reducer'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store

store.dispatch(fetchUsers())
store.subscribe(() => {console.log(store.getState())})