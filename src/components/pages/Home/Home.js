import React from 'react'
import Header from '../../shared/Header';
import RecommendedVideo from '../../shared/RecommendedVideo';
import SideBar from '../../shared/SideBar';
// import CollapseSidebar from "../../shared/CollapseSideBar"
const Home = () => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Header end */}
            <div className='app__page'>
                {/* Sidebar */}
                <SideBar />
                {/* <CollapseSidebar /> */}
                {/* Sidebar end */}
                {/* Recommended videos */}
                <RecommendedVideo />
                {/* Recommended videos end */}
            </div>
        </>
    )
}

export default Home
