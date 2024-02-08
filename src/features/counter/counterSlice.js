import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState:{count:0,},
    reducers:{
        increment: (state) => {state.count += 2},
        decrement: (state) => {state.count -= 2},
        increase : (state,action) => {state.count += action.payload}
    }
})

export const {increment,decrement,increase} = counterSlice.actions

export default counterSlice.reducer;