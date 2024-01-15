import React, { useState } from 'react';

export default function Footer() {

        const [email, setEmail] = useState('');
        const [emailError, setEmailError] = useState('');
    
        const validateEmail = (e) => {
            setEmail(e.target.value);
            const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
            if (!emailRegex.test(e.target.value)) {
                setEmailError('Whoops, make sure it’s an email');
            } else {
                setEmailError('');
            }
        };

    return (
        <>
            <div className="footer" id='contact'>
                <div className="footerTop">
                    <h4>35,000+ ALREADY JOINED</h4>
                    <h2>Stay up-to-date with what we’re doing</h2>
                    <div className="form">
                        <form className="contactBtn">
                            <div className="inputControl">
                                <input autoComplete="off" type="email" id="email" required placeholder="Enter your email address" value={email} onChange={validateEmail} />
                                {emailError && <div className="errorMsg">{emailError}</div>}

                            </div>
                            <button type="submit" id="contactBtn">Contact Us</button>
                        </form>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="footerHeader">
                        <div className="footerNav">
                            <a href="#">
                                <img src="/images/logo-footer.svg" alt="logo" />
                            </a>
                            <ul>
                                <li><a href="#features">FEATURES</a></li>
                                <li><a href="#pricing">PRICING</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                            </ul>
                        </div>
                        <div className="socialMedia">
                            <a href="#"><img className="facebookImg" src="/images/icon-facebook.svg" alt="Social Icons" /></a>
                            <a href="#"><img className="xImg" src="/images/icon-x.svg" alt="Social Icons" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
