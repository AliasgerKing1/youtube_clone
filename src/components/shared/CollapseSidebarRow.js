import React from 'react';
import "../../assets/SidebarRow.css";

const SidebarRow = ({ selected, Icon }) => {
    return (
        <div className={`sidebar__row ${selected && "selected"}`}>
            <Icon className="sidebar__row__icon" />
        </div>
    );
};

export default SidebarRow;
