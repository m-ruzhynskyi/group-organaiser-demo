import {configureStore} from "@reduxjs/toolkit";
import schedulesSlice from './schedulesSlice'
import journalSlice from './journalSlice'
import menuSlice from "./menuSlice";

export default configureStore({
    reducer:{
        schedules: schedulesSlice,
        journal: journalSlice,
        menu: menuSlice
    }
})