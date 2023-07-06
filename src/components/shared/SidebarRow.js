import React from 'react'
import "../../assets/SidebarRow.css"
// import ShortsIcon from "@mui/icons-material/Bolt"
const SidebarRow = ({ selected, title, Icon }) => {
    return (
        <>
            <div className={`sidebar__row ${selected && "selected"}`}>
                <Icon className="sidebar__row__icon" />
                <h2 className='sidebar__row__title'>{title}</h2>
            </div>
        </>
    )
}

export default SidebarRow