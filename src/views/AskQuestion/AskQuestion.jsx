import React from 'react'

import './AskQuestion.css';


function AskQuestion() {
    return (
        <div className="ask-ques-div">
            <div className="ques-summary-div">
                <div className="heading-div">
                    <h1>Ask a public question</h1>
                </div>
                <div className="ques-write-steps-div">
                    <h2>Writing a good question</h2>
                    <p>You’re ready to <span>ask</span> a <span>programming-related question</span> and this form will help guide you through the process.<br />
                        Looking to ask a non-programming question? See <span>the topics here</span> to find a relevant site.</p>
                    <h5>Steps</h5>
                    <ul>
                        <li>Summarize your problem in a one-line title.</li>
                        <li>Describe your problem in more detail.</li>
                        <li>Describe what you tried and what you expected to happen.</li>
                        <li>Add “tags” which help surface your question to members of the community.</li>
                        <li>Review your question and post it to the site.</li>
                    </ul>
                </div>
            </div>
            <div className="ask-ques-form">
                <form>
                    <div className="form-inner-div">
                        <div className="title-div">
                            <label htmlFor="ques-title">Title</label>
                            <p>Be specific and imagine you’re asking a question to another person</p>
                            <input type="text" id="ques-title" placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
                        </div>

                        <div className="body-div">
                            <label htmlFor="ques-body">What are the details of your problem?</label>
                            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            <textarea rows="10" cols="3"></textarea>
                        </div>

                        <div className="tags-div">
                            <label htmlFor="ques-tags">Tags</label>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" id="ques-tags" placeholder="e.g. (xml typescript wordpress)" />
                        </div>

                        <div className="btn-div">
                            <button type="submit" className="review-btn">Review your question</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AskQuestion