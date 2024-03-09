import Home from "./Home/Home";
import {Route, Routes, useLocation} from "react-router-dom";
import './main.css'
import Journal from "./Journal/Journal";

export default function Main() {
    const link = useLocation()['pathname'].replace('/', '')
    return (
        <main className={'main'}>
            {link !== '' && <h2 className={'main__name__page'}>{link.charAt(0).toUpperCase() + link.slice(1)}</h2>}
            <Routes>
                <Route path={''} element={<Home/>}/>
                <Route path={'journal/*'} element={<Journal/>}/>
                <Route/>
                <Route/>
                <Route/>
            </Routes>
        </main>
    )
}