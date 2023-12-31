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
const SideBar = () => {
    return (
        <>
            <div className='sidebar'>
                <SidebarRow selected title="Home" Icon={HomeIcon} />
                <SidebarRow title="Trending" Icon={TrendingIcon} />
                <SidebarRow title="Subscription" Icon={SubscriptionIcon} />
                <SidebarRow title="Shorts" Icon={ShortsIcon} />
                <hr />
                <SidebarRow title="Library" Icon={VideoLibraryIcon} />
                <SidebarRow title="History" Icon={HistoryIcon} />
                <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
                <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
                <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
                <SidebarRow title="Show More" Icon={ExpandMoreIcon} />
            </div>
        </>
    )
}

export default SideBar
