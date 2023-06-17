import React, { useState } from 'react'
import icon from "../../assets/stackicon.png";
import './Auth.css';
import '../../components/Navbar/Navbar';


function Auth() {
    const [isSignup, setIsSignup] = useState(false);

    function handleSwitch() {
        setIsSignup(!isSignup);
    }

    return (
        <section className="login-div" style={isSignup ? { margin: '3% auto' } : {}}>
            {isSignup &&
                <>
                    <div className="SignUp-msg">
                        <h1>Join the Stack Overflow community</h1>
                        <p>Get unstuck — ask a question</p>
                        <p>Unlock new privileges like voting and commenting</p>
                        <p>Save your favorite tags, filters, and jobs</p>
                        <p>Earn reputation and badges</p>
                        <p style={{ fontSize: "13px", color: "#666767" }}>
                            Collaborate and share knowledge with a private group for
                        </p>
                        <p style={{ fontSize: "13px", color: "#007ac6" }}>
                            Get Stack Overflow for Teams free for up to 50 users.
                        </p>
                    </div>
                </>}
            <div className="login-container">
                {!isSignup && <img src={icon} alt="stack overflow-clone" className="login-logo" />}
                <form>
                    {
                        isSignup && (
                            <>
                                <label htmlFor="name"><div className="auth-heading"><b>Display Name</b></div></label>
                                <input type="text" name="name" id="name" /></>
                        )
                    }
                    <labe htmlFor="email"><div className="auth-heading"><b>Email</b></div></labe>
                    <input type="email" name="email" id="email" />
                    <div id="forgot-password">
                        <label htmlFor="password"><div className="auth-heading"><b>Password</b></div></label>
                        {!isSignup && <p className="f-text">forgot password</p>}
                    </div>
                    <input type="password" name="password" id="password" />
                    {isSignup && <p style={{ color: '#666767', fontSize: '13px' }}>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number.</p>}
                    {isSignup && (<>
                        <label htmlFor="checkbox" className="fourth-label">
                            <input type="checkbox" id="checkbox" />
                            <p style={{ fontSize: '13px' }}>Opt-in to receive occasional product<br />  updates, user research invitations, company<br />  announcements, and digests.</p>
                        </label>
                    </>)}
                    <button type="submit" className="auth-btn">{!isSignup ? 'Log in' : 'Sign up'}</button>
                    {isSignup && <p style={{ color: '#666767', fontSize: '13px' }}>By clicking “Sign up”, you agree to our <span style={{ color: '#007ac6' }}>terms of<br /> service</span> and acknowledge that you have read and<br /> understand our <span style={{ color: '#007ac6' }}>privacy policy</span> and <span style={{ color: '#007ac6' }}>code of<br /> conduct.</span></p>}
                </form>
                <p>
                    {!isSignup ? "Don't have an account?" : "Already have an account?"}
                    <button type="submit" className="switch-btn" onClick={handleSwitch}>{isSignup ? 'Log in' : 'Sign up'}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth
