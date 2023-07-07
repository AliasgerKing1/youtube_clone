import React from 'react'
import "../../assets/Sidebar.css"
import SidebarRow from './SidebarRow'

import HomeIcon from "@mui/icons-material/Home"
import TrendingIcon from "@mui/icons-material/Whatshot"
import SubscriptionIcon from "@mui/icons-material/Subscriptions"
import ShortsIcon from "@mui/icons-material/Bolt"
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"
import HistoryIcon from "@mui/icons-material/History"
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const CollapseSideBar = () => {
    return (
        <>
            <div className='sidebar'>
                <SidebarRow selected Icon={HomeIcon} />
                <SidebarRow Icon={TrendingIcon} />
                <SidebarRow Icon={SubscriptionIcon} />
                <SidebarRow Icon={ShortsIcon} />
                <hr />
                <SidebarRow Icon={VideoLibraryIcon} />
                <SidebarRow Icon={HistoryIcon} />
                <SidebarRow Icon={OndemandVideoIcon} />
                <SidebarRow Icon={WatchLaterIcon} />
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} />
                <SidebarRow Icon={ExpandMoreIcon} />
            </div>
        </>
    )
}

export default CollapseSideBar
