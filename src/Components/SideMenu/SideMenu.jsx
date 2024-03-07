import './sideMenu.css'
import logo from '../../assets/img/logoSvg.svg'
import {NavLink} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {useEffect} from "react";
import SelectList from "../Reusable/SelectList/SelectList";
import {useDispatch, useSelector} from "react-redux";
import {changeGroup, getSchedules} from "../../store/schedulesSlice";

function SideMenu() {
    const dispatch = useDispatch()
    const schedules = useSelector(state => state.schedules.schedulesList)[0]

    useEffect(() => {
        async function axiosGetDataSchedules() {
            await dispatch(getSchedules())
        }
        axiosGetDataSchedules()
    }, [dispatch]);

    useEffect(() => {
        if(localStorage.group !== undefined){
            dispatch(changeGroup(localStorage.group))
        }
    }, [dispatch]);
    return(
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logo} alt="Logo"/>
                <h3 className='logo__name'>Journal</h3>
            </div>
            <div className='nav__categories'>
                <div className='category__link'>
                    <HomeOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='' className='category__name'>Home</NavLink>
                </div>
                <div className='category__link'>
                    <GroupsOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='journal' className='category__name'>Journal</NavLink>
                </div>
                <div className='category__link'>
                    <CalendarMonthOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='schedule' className='category__name'>Schedule</NavLink>
                </div>
                <div className='category__link'>
                    <SchoolOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='professors' className='category__name'>Professors</NavLink>
                </div>
            </div>
            <div className='nav__button-group'>
                {schedules !== undefined &&
                    <SelectList classForSelect={'button-group'} name='sideMenu' groups = {Object.keys(schedules)}/>
                }
            </div>
            <div className='nav__account'>
                <div className='account__login'>
                    <LoginOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='5' className='account__text'>Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default SideMenu