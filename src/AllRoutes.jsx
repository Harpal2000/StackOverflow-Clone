import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/HomeMenu/HomeMenu.jsx';
import Auth from './views/Auth/Auth.jsx'
import AllQuestions from './views/Questions/AllQuestions.jsx';
import AskQuestion from './views/AskQuestion/AskQuestion.jsx';
import DisplayQuestion from './views/Questions/DisplayQuestion.jsx';

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/AllQuestions' element={<AllQuestions />} />
            <Route path='/AskQuestion' element={<AskQuestion />} />
            <Route path='/AllQuestions/:id' element={<DisplayQuestion />} />
        </Routes>
    )
}

export default AllRoutes
