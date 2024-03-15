import './App.css';
import SideMenu from "./Components/SideMenu/SideMenu";
import Main from './Components/Main/Main'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getData, getLink} from "./store/journalSlice";
import {getSchedules} from "./store/schedulesSlice";

function App() {
    const dispatch = useDispatch()
    const journalLink = useSelector(state => state.journal.journalLink)

    useEffect(() => {
        dispatch(getSchedules())
        dispatch(getLink())
    }, [dispatch]);


    useEffect(() => {
        if (journalLink !== null){
            dispatch(getData())
        }
    }, [journalLink]);
    return (
        <>
            <SideMenu/>
            <Main/>
        </>
    );
}

export default App;
