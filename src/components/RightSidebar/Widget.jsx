import React from 'react'
import penIcon from "../../assets/penicon.svg";
import commentIcon from "../../assets/commenticon.svg";
import stackIcon from "../../assets/stackiconblack.svg";
function Widget() {
    return (
        <div className="main-widget-div">
            <h4>The Overflow Blog</h4>
            <div className="right-bar">
                <div className="right-bar-content">
                    <img src={penIcon} alt="penicon" width="13" />
                    <p>
                        How to keep your new tool from gathering dust
                    </p>
                </div>
                <div className="right-bar-content">
                    <img src={penIcon} alt="penicon" width="13" />
                    <p>Chatting with Apple at WWDC: Macros in Swift and the new visionOS</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-bar">
                <div className="right-bar-content">
                    <img src={commentIcon} alt="commenticon" width="13" />
                    <p>We are graduating the updated button styling for vote arrows</p>
                </div>
                <div className="right-bar-content">
                    <img src={commentIcon} alt="commenticon" width="13" />
                    <p>Statement from SO: June 5, 2023 Moderator Action</p>
                </div>
                <div className="right-bar-content">
                    <img src={stackIcon} alt="stackicon" width="13" />
                    <p>Does the policy change for AI-generated content affect users who (want to)...</p>
                </div>
                <div className="right-bar-content">
                    <img src={stackIcon} alt="stackicon" width="13" />
                    <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div>
            </div>
        </div>
    )
}

export default Widget