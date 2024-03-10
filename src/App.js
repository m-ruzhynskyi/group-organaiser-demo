import './App.css';
import SideMenu from "./Components/SideMenu/SideMenu";
import Main from './Components/Main/Main'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJournalBySubject} from "./store/journalSlice";

function App() {
    return (
        <>
            <SideMenu/>
            <Main/>
        </>
    );
}

export default App;
