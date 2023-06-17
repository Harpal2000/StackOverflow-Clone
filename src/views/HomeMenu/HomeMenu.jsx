import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import '../../App.css'

function HomeMenu() {
    return (
        <div className='left-side-container'>
            <LeftSidebar />
            <div className='main-container'>
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}

export default HomeMenu