import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        auth: {
            token: null
        }
    }
]

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginAction: (state, action) => {
            //state.push("action.payload --> ", action.payload)
            console.log("action.payload --> ", action.payload)
            const foundUser = state.find(auth => auth.auth.token === null)
            foundUser.auth.token = action.payload
        },
        logoutAction: (state, action) => {
            console.log(action.payload);
            console.log('state --> ', state);
            const userFound = state.find(user => user.auth.token === action.payload)
            if(userFound)
                userFound.auth.token = null
                //state.splice(state.indexOf(userFound),1)
        }
    }
})

export const { loginAction, logoutAction } = authSlice.actions

export default authSlice.reducer