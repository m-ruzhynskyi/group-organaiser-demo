import './logout.css'
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logoutUser} from "../../../../store/userSlice";
import {useEffect} from "react";
export default function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleLogout() {
        dispatch(logoutUser())
        localStorage.removeItem('user')
    }

    useEffect(() => {
        if(!localStorage.user) navigate('/')
    }, []);
    return(
        <div className={'logoutPage'}>
            <button className={'logout__logout'} onClick={handleLogout}><Link to={'/#'}>Logout</Link></button>
            <button className={'logout__cancel'}><Link to={'/more'}>Cancel</Link></button>
        </div>
    )
}