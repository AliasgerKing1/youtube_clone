import React from 'react'
import Header from '../../shared/Header';
import RecommendedVideo from '../../shared/RecommendedVideo';
import SideBar from '../../shared/SideBar';
import CollapseSidebar from "../../shared/CollapseSideBar"
import ExpandRecommendVideo from '../../shared/ExpandRecommendVideo'
import { useSelector } from 'react-redux';
const Home = () => {
    let state = useSelector(state => state.SidebarReducer)
    return (
        <>
            {/* Header */}
            <Header />
            {/* Header end */}
            <div className='app__page'>
            { state == true ? (
                <>
                {/* Collapse Sidebar  */}
                <CollapseSidebar />
                {/* Collapse Sidebar end */}
                {/* Recommended videos  */}
                <ExpandRecommendVideo />
                {/*ecommended videos end */}
                </>
            ) : (
                <>
                  {/* Sidebar */}
                <SideBar />
                {/* Sidebar end */}
                {/* Recommended videos */}
                <RecommendedVideo />
                {/* Recommended videos end */}
                </>
            ) } 
            </div>
        </>
    )
}

export default Home
