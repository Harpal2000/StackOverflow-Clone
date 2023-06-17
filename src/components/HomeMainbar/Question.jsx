import React from 'react'
import { Link } from 'react-router-dom'

function Question({ question }) {
    return (
        <div className='main-ques-div'>
            <div className='votes-ans-div'>
                <span>{question.votes}  votes</span>
                <span>{question.noOfAnswers}  answers</span>
            </div>
            <div className='ans-details'>
                <Link to={`/AllQuestions/${question.QuesId}`} className='ques-link'>{question.questionTitle}</Link>
                <div className='tags-time-div'>
                    <div className='display-tags'>
                        {question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                    <p className='ques-post-time'>
                        <span className='userName'>{question.userPosted}</span> asked {question.askedOn}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Question