import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

function DisplayQuestion() {
    return (
        <div className='left-side-container'>
            <LeftSidebar />
            <div className='main-container'>
                <QuestionDetails />
                <RightSidebar />
            </div>
        </div>
    )
}


export default DisplayQuestion