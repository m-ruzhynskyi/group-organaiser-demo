import {configureStore} from "@reduxjs/toolkit";
import schedulesReducer from './schedulesSlice'

export default configureStore({
    reducer:{
        schedules: schedulesReducer,
        journal: null
    }
})