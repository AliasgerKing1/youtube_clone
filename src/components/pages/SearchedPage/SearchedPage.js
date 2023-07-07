import React from 'react'
import Header from '../../shared/Header'
import SideBar from "../../shared/SideBar"
import ResultedVideo from '../../shared/ResultedVideo'
const SearchedPage = () => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Header end */}
            <div className='app__page'>
                {/* Sidebar */}
                <SideBar />
                {/* Sidebar end */}
                {/* Resulted videos */}
                <ResultedVideo />
                {/* Resulted videos end */}
            </div>
        </>
    )
}

export default SearchedPage
