import {configureStore} from "@reduxjs/toolkit";
import schedulesSlice from './schedulesSlice'
import journalSlice from './journalSlice'
import menuSlice from "./menuSlice";
import userSlice from "./userSlice"

export default configureStore({
    reducer:{
        schedules: schedulesSlice,
        journal: journalSlice,
        menu: menuSlice,
        user: userSlice
    }
})