import React from 'react'
import { useParams } from 'react-router-dom';
import upArrow from '../../assets/uparrow.svg';
import downArrow from '../../assets/downarrow.svg';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar.jsx';
import DisplayAnswers from './DisplayAnswers';
import './Question.css'

function QuestionDetails() {
    const { id } = useParams();
    const user = 111;
    const navigate = useNavigate();

    var questionsList = [{
        QuesId: '1',
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        questionBody: "I am currently learning Python and looking at how to define and use functions. But I have a question about something that I find confusing.In the tutorial there is something like this: So I understand when I call encrypt(text,shift) I am passing those arguments to the parameters in the function txt_msg and shft_msg, so that they are available within the function.So why then have they not also passed alphabet as well? In my mind, based on experience with MATLAB, if you want variables from the main workspace to be available for the function, you have to pass them as arguments.Why is alphabet available to the function without passing it as an argument? If that is the case, what is the point of passing any arguments? ",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "Harpal",
        askedOn: "jan 1",
        userId: 1,
        upVotes: 2,
        downVotes: 3,
        answer: [{
            answerBody: "Alphabet is a global variable. You may use any global variable inside your function.So Whats the point of passing arguments then?The point of passing arguments is that you can use the values that have not been defined yet at the time you're creating the function.The value of txt_msg and shft_msg is not known when you are defining the function. Unless you write these as arugments there is no way for you to write the function and then provide the values afterwards",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
            upVotesAns: 5,
            downVotesAns: 3,
        }]
    }, {
        QuesId: '2',
        votes: 0,
        noOfAnswers: 8,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        userPosted: "Indepal",
        questionBody: "I am currently learning Python and looking at how to define and use functions. But I have a question about something that I find confusing.In the tutorial there is something like this: So I understand when I call encrypt(text,shift) I am passing those arguments to the parameters in the function txt_msg and shft_msg, so that they are available within the function.So why then have they not also passed alphabet as well? In my mind, based on experience with MATLAB, if you want variables from the main workspace to be available for the function, you have to pass them as arguments.Why is alphabet available to the function without passing it as an argument? If that is the case, what is the point of passing any arguments? ",
        questionTags: ["java", "node js", "react js", "mongodb"],
        askedOn: "jan 1",
        userId: 1,
        upVotes: 5,
        downVotes: 3,
        answer: [{
            answerBody: "Alphabet is a global variable. You may use any global variable inside your function.So Whats the point of passing arguments then?The point of passing arguments is that you can use the values that have not been defined yet at the time you're creating the function.The value of txt_msg and shft_msg is not known when you are defining the function. Unless you write these as arugments there is no way for you to write the function and then provide the values afterwards",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
            upVotesAns: 5,
            downVotesAns: 3,
        }]
    }, {
        QuesId: '3',
        votes: 1,
        noOfAnswers: 8,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        questionBody: "I am currently learning Python and looking at how to define and use functions. But I have a question about something that I find confusing.In the tutorial there is something like this: So I understand when I call encrypt(text,shift) I am passing those arguments to the parameters in the function txt_msg and shft_msg, so that they are available within the function.So why then have they not also passed alphabet as well? In my mind, based on experience with MATLAB, if you want variables from the main workspace to be available for the function, you have to pass them as arguments.Why is alphabet available to the function without passing it as an argument? If that is the case, what is the point of passing any arguments? ",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "Anmol",
        askedOn: "jan 1",
        userId: 1,
        upVotes: 4,
        downVotes: 3,
        answer: [{
            answerBody: "Alphabet is a global variable. You may use any global variable inside your function.So Whats the point of passing arguments then?The point of passing arguments is that you can use the values that have not been defined yet at the time you're creating the function.The value of txt_msg and shft_msg is not known when you are defining the function. Unless you write these as arugments there is no way for you to write the function and then provide the values afterwards",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
            upVotesAns: 5,
            downVotesAns: 3,
        }]
    }, {
        QuesId: '4',
        votes: 1,
        noOfAnswers: 2,
        questionTitle: "How to query for menu items that can be shown/hidden with Content Permissions in Orchard Core?",
        questionBody: "I am currently learning Python and looking at how to define and use functions. But I have a question about something that I find confusing",
        questionTags: ["javascript", "R", "python"],
        userPosted: "Khushi",
        askedOn: "jan 1",
        userId: 1,
        upVotes: 2,
        downVotes: 1,
        answer: [{
            answerBody: "Alphabet is a global variable. You may use any global variable inside your function.So Whats the point of passing arguments then?The point of passing arguments is that you can use the values that have not been defined yet at the time you're creating the function.The value of txt_msg and shft_msg is not known when you are defining the function. Unless you write these as arugments there is no way for you to write the function and then provide the values afterwards",
            userAnswered: "Karan",
            answeredOn: "jan 2",
            userId: 2,
            upVotesAns: 5,
            downVotesAns: 3,
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
        <div className="display-ques-main-div">
            {
                questionsList === null ? <h1>Loading...</h1> :
                    <>
                        {
                            questionsList.filter(question => question.QuesId === id).map(question => (
                                <div key={question.QuesId}>
                                    <div className="ques-title-div">
                                        <h2>{question.questionTitle}</h2>
                                        <div className="btn">
                                            <button onClick={checkUserLogin} className='ask-ques-btn-2'>Ask Question</button>
                                        </div>
                                    </div>
                                    <div className="ques-ans-div">
                                        <div className="title-details">
                                            <span>Asked {question.askedOn}</span>
                                            <span>Modified today</span>
                                            <span>Viewed 31 time</span>
                                        </div>
                                        <div className="ques-body-div">
                                            <div className="ques-vote-div">
                                                <img src={upArrow} className="arrowUp arrow" alt="upArrow" width="18" />
                                                <p style={question.upVotes - question.downVotes < 0 ? { margin: '2px 5px 7px 7px' } : { margin: '2px 5px 7px 14px' }}>{question.upVotes - question.downVotes}</p>
                                                <img src={downArrow} className="arrowDown arrow" alt="downArrow" width="18" />
                                            </div>
                                            <div>
                                                <p className="ques-body">{question.questionBody}</p>
                                                <div className="ques-tags">{question.questionTags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))}</div>
                                                <div className="ques-userAction">
                                                    <div>
                                                        <button type="submit" className="share-btn">Share</button>
                                                        <button type="submit" className="edit-btn">Edit</button>
                                                        <button type="submit" className="edit-btn">Follow</button>
                                                    </div>
                                                    <div className="user-details">
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/User/${question.userId}`} style={{ textDecoration: 'none' }} className="user-link">
                                                            <Avatar backgroundColor="orange" padding="0.4rem 0.8rem" margin="2px 5px 0 0" color="#000000" borderRadius="3px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div className="user-name">
                                                                <p>{question.userPosted}</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            question.noOfAnswers !== 0 && (
                                                <div className="ans-div">
                                                    <h3>{question.noOfAnswers} Answers</h3>
                                                    <DisplayAnswers key={question.QuesId} question={question} />
                                                </div>
                                            )
                                        }
                                        <div className="post-ans-div">
                                            <h3>Your Answers</h3>
                                            <form>
                                                <textarea name="answer" cols="30" rows="10"></textarea>
                                                <button type="submit" className="post-ans-btn">Post Your Answers</button>
                                            </form>
                                            <p>
                                                Not the answer you're looking for? Browse other questions tagged<br /></p>
                                            <p>
                                                {question.questionTags.map((tag) => (
                                                    <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                                                ))}
                                                or{" "}
                                                <Link to="/AskQuestion" style={{ textDecoration: "none", color: "#009dff" }}>
                                                    ask your own question.
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails