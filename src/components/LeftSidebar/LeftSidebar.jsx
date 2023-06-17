import React from 'react'
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

function LeftSidebar() {
    return (
        <div className="left-bar">
            <nav className="left-nav">
                <NavLink to="/" className="left-nav-link" activeClassName="active"><p>Home</p></NavLink>
                <div className="left-nav-div">
                    <div><p>PUBLIC</p></div>
                    <NavLink to="/AllQuestions" className="left-nav-link" activeClassName="active">
                        <img src={Globe} alt="Globe-icon" />
                        <p style={{ paddingLeft: "10px" }}> Questions </p>
                    </NavLink>
                    <NavLink to="/Tags" className="left-nav-link" activeClassName="active" style={{ paddingLeft: "40px" }}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to="/Users" className="left-nav-link" activeClassName="active" style={{ paddingLeft: "40px" }}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
