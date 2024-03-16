import {Route, Routes, useNavigate} from "react-router-dom";
import Category from "./Category/Category";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export default function MoreMain() {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.user) navigate('/#')
    }, []);
    return(
        <Routes>
            <Route path={'category'} element={<Category/>}/>
        </Routes>
    )
}