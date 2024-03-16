import './logout.css'
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logoutUser} from "../../../../store/userSlice";
export default function Logout() {
    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(logoutUser())
        localStorage.removeItem('user')
    }
    return(
        <div className={'logout'}>
            <button className={'logout__logout'} onClick={handleLogout}><Link to={'/'}>Logout</Link></button>
            <button className={'logout__cancel'}><Link to={'/more'}>Cancel</Link></button>
        </div>
    )
}