import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: ''
}
  
export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholders.typicode.com/users')
        .then(res => {
            const user = res.data.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))
            dispatch(fetchSuccess(user))
        })
        .catch(error => {
            dispatch(fetchFailure(error.message))
        })
    }
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchRequest: (state) => {
            state.loading = true
        },  
        fetchSuccess: (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        },
        fetchFailure: (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload
        },
    },
})

export const {fetchRequest, fetchSuccess, fetchFailure} = user.actions
export default user.reducer
    
    




// ********************** createAsyncThunk *********************  

//   export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    //     return axios 
    //         .get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.data.map(user => (
    //             <p key={user.id}>{user.email}</p>
    //         ) ))
//   })
            

//   const user = createSlice({
    //     name: 'user',
    //     initialState,
    //     extraReducers: builder => {
    //       builder.addCase(fetchUsers.pending, state => {
    //         state.loading = true
    //       })
    //       builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //         state.error = ''
    //       })
    //       builder.addCase(fetchUsers.rejected, (state, action) => {
    //         state.loading = false
    //         state.users = []
    //         state.error = action.error.message
    //       })
    //     }
//   })