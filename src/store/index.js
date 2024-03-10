import {configureStore} from "@reduxjs/toolkit";
import schedulesReducer from './schedulesSlice'
import journalSlice from './journalSlice'

export default configureStore({
    reducer:{
        schedules: schedulesReducer,
        journal: journalSlice
    }
})