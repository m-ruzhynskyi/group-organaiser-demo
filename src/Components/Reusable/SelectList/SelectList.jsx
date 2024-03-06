import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {changeGroup} from "../../../store/schedulesSlice";

const StyledMenu = styled((props) => (
    <Menu
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
    },
}));

const StyledButton = styled(Button)(({theme}) => ({
    background: 'rgba(123, 228, 149, 1)',
    color: 'white',
    fontFamily: 'PoppinsMedium, sans-serif',
    fontSize: 'clamp(1.063rem, 0.336vw + 0.847rem, 1.25rem)',
    borderRadius: 15,
    '&:hover': {
        background: 'rgb(66 205 101)'
    },
}));

export default function SelectList({name, groups}) {
    const group = useSelector(state => state.schedules.groupName)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        dispatch(changeGroup(e.target.textContent))
        if(name === 'sideMenu'){
            localStorage.setItem('group', e.target.textContent)
        }
        setAnchorEl(null);
    };
    return (
        <>
            <StyledButton
                id="select-list-button"
                aria-controls={open ? 'select-list-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon/>}
            >
                {group}
            </StyledButton>
            <StyledMenu
                id="select-list-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {groups.map(singleGroup => {
                    return (
                        <MenuItem key={uniqid()} onClick={handleClose} disableRipple>
                            {singleGroup}
                        </MenuItem>
                    )
                })}
            </StyledMenu>
        </>
    );
}
