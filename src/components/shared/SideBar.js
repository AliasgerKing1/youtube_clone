import React from 'react'
import "../../assets/Sidebar.css"
import SidebarRow from './SidebarRow'

import HomeIcon from "@mui/icons-material/Home"
import TrendingIcon from "@mui/icons-material/Whatshot"
import SubscriptionIcon from "@mui/icons-material/Subscriptions"
import ShortsIcon from "@mui/icons-material/Bolt"
const SideBar = () => {
    return (
        <>
            <div className='sidebar'>
                <SidebarRow selected title="Home" Icon={HomeIcon} />
                <SidebarRow title="Trending" Icon={TrendingIcon} />
                <SidebarRow title="Subscription" Icon={SubscriptionIcon} />
                <SidebarRow title="Shorts" Icon={ShortsIcon} />
                <hr />
                <SidebarRow title="Shorts" Icon={ShortsIcon} />
            </div>
        </>
    )
}

export default SideBar
