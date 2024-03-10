import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {courses, link} from "../Components/otherFile";
import axios from "axios";

export const getData = createAsyncThunk(
    'data/getData',
    async function (_) {
        try {
            let tempArr = []
            for (let i = 1; i < courses.length + 1; i++) {
                const response = await axios.get(link + '/' + i)
                if (response.statusText === 'OK') {
                    response.data.data.forEach(element => {
                        let month = [Number(element['Дата'].split('.')[1])] - 1;
                        element['Subj'] = i - 1
                        if (!tempArr[month]) tempArr[month] = [];
                        tempArr[month].push(element)
                    })
                }
            }
            return tempArr
        } catch (error) {
            return error.message
        }
    }
)


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        journal: [],
        status: null,
        error: null
    },
    reducers: {
        getJournalBySubject(state, action) {
            state.groupData = state.journal.flat().filter(day => Number(day['Subj']) === action.payload);
        },
        addReducer(state, action) {
        },
        updateReducer(state, action) {
        },
        editStatus(state) {
            state.status = !state.status
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getData.pending, (state) => {
                state.status = false
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.status = true
                state.journal = action.payload
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = action.payload
            })
    },
})

export const {getJournalBySubject,  addReducer, updateReducer, editStatus} = dataSlice.actions
export default dataSlice.reducer