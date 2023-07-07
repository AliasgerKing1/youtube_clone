import React, { useState } from 'react'
import "../../assets/ClassLibrary.css"
import "../../assets/Header.css"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import VideoCallingIcon from "@mui/icons-material/VideoCall"
import AppIcon from "@mui/icons-material/Apps"
import NotificationIcon from "@mui/icons-material/Notifications"

import Avatar from "@mui/material/Avatar"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setSidebar} from "../../Redux/Sidebar/SidebarReducer"
const Header = () => {
    const dispatch = useDispatch()
    let state = useSelector(state => state.SidebarReducer)
    const [inputSearch, setInputSearch] = useState("");
    const [nonEmpty, setNonEmpty] = useState(false);
    const [extraSearchicon, setExtraSearchicon] = useState(false);
    let preventDefualt = () => {
        if (inputSearch.length === 0) {
            setNonEmpty(false);
          } else {
            setNonEmpty(true);
          }
        setExtraSearchicon(true)
    }
    let NonEmptySearch = () => {
        setNonEmpty(true)
    }

    let SidebarChange = () => {
        if(state == true) {
           
        }
    }
    return (
        <>
            <div className='header'>
                <div className='header__left'>

                    <MenuIcon className='pointer' onClick={SidebarChange}/>
                    <NavLink to="/">
                        <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='youtube' />
                    </NavLink>
                </div>
                <div className='header__input'>
                    {/* <SearchIcon className='header__inputPreButton' /> */}
                    <input type='text' placeholder='Search' onChange={(e) => {
                        setInputSearch(e.target.value)
                        NonEmptySearch()
                    }} value={inputSearch}></input>
                    {nonEmpty === true ? (<NavLink to={`/search/${inputSearch}`}>
                        <SearchIcon className='header__inputButton' onClick={preventDefualt} />
                    </NavLink>) : (
                        <SearchIcon className='header__inputButton' onClick={preventDefualt} />)}
                </div>
                <div className='header__right__icons'>
                    <VideoCallingIcon className='header__icon pointer' />
                    <AppIcon className='header__icon pointer' />
                    <NotificationIcon className='header__icon pointer' />
                    <Avatar
                        alt='Aliasger'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPf5JtWX65XwbOr-KHHcn-97HklVvmv8c3w&usqp=CAU' className=' pointer'
                    />
                </div>
            </div>
        </>
    )
}

export default Header
