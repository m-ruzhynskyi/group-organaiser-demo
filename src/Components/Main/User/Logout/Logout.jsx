import './logout.css'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {logoutUser} from "../../../../store/userSlice";
export default function Logout() {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user.user)
    // const navigate = useNavigate()
    function handleLogout() {
        dispatch(logoutUser())
        localStorage.removeItem('user')
    }

    // useEffect(() => {
    //     if(user === null) navigate('/')
    // }, []);
    return(
        <div className={'logoutPage'}>
            <button className={'logout__logout'} onClick={handleLogout}><Link to={'/#'}>Logout</Link></button>
            <button className={'logout__cancel'}><Link to={'/more'}>Cancel</Link></button>
        </div>
    )
}