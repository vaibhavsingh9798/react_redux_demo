import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/authentication/authSlice'
const store = configureStore({reducer:{
    counter:counterReducer,
    authentication: authReducer
}})

export default store;