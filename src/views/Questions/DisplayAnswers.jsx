import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import upArrow from '../../assets/uparrow.svg';
import downArrow from '../../assets/downarrow.svg';

function DisplayAnswers({ question }) {
    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans-div" key={ans.QuesId}>
                        <div className="ans-body-div">
                            <div className="ques-vote-div">
                                <img src={upArrow} className="arrowUp arrow" alt="upArrow" width="18" />
                                <p style={ans.upVotesAns - ans.downVotesAns < 0 ? { margin: '2px 5px 7px 5px' } : { margin: '2px 5px 7px 14px' }}>{ans.upVotesAns - ans.downVotesAns}</p>
                                <img src={downArrow} className="arrowDown arrow" alt="downArrow" width="18" />
                            </div>
                            <div>
                                <p className="ans-body">{ans.answerBody}</p>
                                <div className="ques-userAction">
                                    <div>
                                        <button type="submit" className="share-btn">Share</button>
                                        <button type="submit" className="edit-btn">Edit</button>
                                        <button type="submit" className="edit-btn">Follow</button>
                                    </div>
                                    <div className="user-ans-details">
                                        <p className="ans-body">answered {ans.answeredOn}</p>
                                        <Link to={`/User/${ans.userId}`} style={{ textDecoration: 'none' }} className="user-ans-link">
                                            <Avatar backgroundColor="green" padding="0.4rem 0.8rem" margin="2px 5px 0 0" color="#ffffff" borderRadius="3px" >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                            <div className="user-ans-name">
                                                <p>{ans.userAnswered}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default DisplayAnswers