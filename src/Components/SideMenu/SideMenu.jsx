import './sideMenu.css'
import logo from '../../assets/img/logoSvg.svg'
import {NavLink} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {useEffect, useState} from "react";
import axios from "axios";
import SelectList from "../Reusable/SelectList/SelectList";

function SideMenu() {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('https://65e5ffb1d7f0758a76e7ec04.mockapi.io/shedule')
            .then(res => setData(res.data[0]))
    }, []);
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
                    <NavLink to='1' className='category__name'>Journal</NavLink>
                </div>
                <div className='category__link'>
                    <CalendarMonthOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='2' className='category__name'>Schedules</NavLink>
                </div>
                <div className='category__link'>
                    <SchoolOutlinedIcon sx={{ fontSize: 30}}/>
                    <NavLink to='3' className='category__name'>Professors</NavLink>
                </div>
            </div>
            <div className='nav__button-group'>
                {data !== '' &&
                    <SelectList classForSelect={'button-group'} name='select nav group' groups = {Object.keys(data)}/>
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