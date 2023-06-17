import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './HomeMainbar.css';
// import QuestionList from './QuestionList';
import Questions from './Question';

function HomeMainbar() {
    const location = useLocation();

    const user = 111;
    const navigate = useNavigate();

    var questionsList = [{
        QuesId: 1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "Harpal",
        askedOn: "jan 1",
        userId: 1,
        upVotes: 2,
        downVotes: 3,
        answer: [{
            answerBody: "Answer body written",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        QuesId: 2,
        votes: 0,
        noOfAnswers: 8,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        userPosted: "Indepal",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        askedOn: "jan 1",
        userId: 1,
        upVotes: 2,
        downVotes: 3,
        answer: [{
            answerBody: "Answer body written",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        QuesId: 3,
        votes: 1,
        noOfAnswers: 8,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "Anmol",
        askedOn: "jan 1",
        userId: 1,
        upVotes: 2,
        downVotes: 3,
        answer: [{
            answerBody: "Answer body written",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        QuesId: 4,
        votes: 1,
        noOfAnswers: 2,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "Khushi",
        askedOn: "jan 1",
        userId: 1,
        upVotes: 2,
        downVotes: 3,
        answer: [{
            answerBody: "Answer body written",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]


    function checkUserLogin() {
        if (user == null) {
            alert('Login or signup to ask a question');
            navigate('/Auth');
        } else {
            navigate('/AskQuestion');
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkUserLogin} className='ask-ques-btn'>Ask Question</button>
            </div>
            <div>
                {questionsList === null ? <h1>Loading...</h1> :
                    <>
                        <p className='questions-length-div'>{questionsList.length} questions</p>
                        {
                            questionsList.map((question) => (
                                <Questions question={question} key={question.id} />
                            ))
                        }
                    </>
                }
            </div>
        </div >
    )
}

export default HomeMainbar