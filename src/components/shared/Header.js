import React from 'react'
import "../../assets/Header.css"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import VideoCallingIcon from "@mui/icons-material/VideoCall"
import AppIcon from "@mui/icons-material/Apps"
import NotificationIcon from "@mui/icons-material/Notifications"

import Avatar from "@mui/material/Avatar"
const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header__left'>

                    <MenuIcon />
                    <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='youtube' />
                </div>
                <div className='header__input'>
                    <input type='text' placeholder='Search'></input>
                    <SearchIcon className='header__inputButton' />
                </div>
                <div className='header__right__icons'>
                    <VideoCallingIcon className='header__icon' />
                    <AppIcon className='header__icon' />
                    <NotificationIcon className='header__icon' />
                    <Avatar
                        alt='Aliasger'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPf5JtWX65XwbOr-KHHcn-97HklVvmv8c3w&usqp=CAU'
                    />
                </div>
            </div>
        </>
    )
}

export default Header
