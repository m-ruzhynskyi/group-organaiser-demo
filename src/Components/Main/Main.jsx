import Home from "./Home/Home";
import {Route, Routes, useLocation} from "react-router-dom";
import './main.css'
import Journal from "./Journal/Journal";
import {useSelector} from "react-redux";

export default function Main() {
    const link = useLocation()['pathname'].replace('/', '')
    const menuStatus = useSelector(state => state.menu.menuStatus)
    return (
        <main style={{display: menuStatus ? 'flex' : 'none'}} className={'main'}>
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