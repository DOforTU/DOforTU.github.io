import React from "react";
import "../styles/IntroSection.css";

const IntroSection = () => {
    return (
        <section className="section" id="intro-section">
            <div className="wrapper" id="intro-wrapper">
                <div className="text-line">
                    <h1>D</h1>
                    <p>esign</p>
                </div>
                <div className="text-line">
                    <h1>O</h1>
                    <p>ptimized</p>
                </div>
                <p>for</p>
                <div className="text-line">
                    <h1>T</h1>
                    <p>oday's</p>
                </div>
                <div className="text-line">
                    <h1>U</h1>
                    <p>ser</p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
