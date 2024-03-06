import './App.css';
import SideMenu from "./Components/SideMenu/SideMenu";
import Home from './Components/Home/Home'
import {Route, Routes} from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <SideMenu/>
            <Home/>

            {/*<Routes>*/}
            {/*    <Route path={'schedules'}/>*/}
            {/*    <Route path={'professors'}/>*/}
            {/*    <Route path={'journal'}/>*/}
            {/*</Routes>*/}
        </>
    );
}

export default App;
