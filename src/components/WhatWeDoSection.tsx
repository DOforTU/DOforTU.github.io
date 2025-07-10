import React from "react";
import "../styles/WhatWeDoSection.css";

const WhatWeDoSection = () => {
    return (
        <section className="section" id="what-do-we-do-section">
            <div className="wrapper" id="what-do-we-do-wrapper">
                <div className="what-do-we-do-content">
                    <h2 className="section-title">What Do We Do?</h2>
                    <p className="section-description">우리는 함께 성장하며 혁신적인 프로젝트를 만들어갑니다</p>

                    <div className="activity-section">
                        <h3 className="activity-title">Projects</h3>
                        <p className="activity-description">우리는 이런 프로젝트를 진행합니다</p>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon project-logo">
                                    <img src="/tripwith_logo.png" alt="TripWith Logo" />
                                </div>
                                <h3>TripWith</h3>
                                <p>
                                    여행 플래너 및 커뮤니티 서비스를 통해 사용자들이 여행을 계획하고 경험을 공유할 수
                                    있는 플랫폼을 제공합니다.
                                </p>
                                <a
                                    href="https://github.com/tripwith-dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="repo-link"
                                >
                                    TripWith GitHub
                                </a>
                            </div>
                            <div className="service-card">
                                <div className="service-icon project-logo tulog-logo">
                                    <img src="/tulog_text_logo_white.png" alt="TULOG Logo" />
                                </div>
                                <h3>TULOG</h3>
                                <p>
                                    개인 및 팀 블로그 서비스를 통해 개발자들이 지식을 기록하고 공유할 수 있는 플랫폼을
                                    제공합니다.
                                </p>
                                <a
                                    href="https://github.com/DOforTU/tulog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="repo-link"
                                >
                                    TULOG GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="activity-section">
                        <h3 className="activity-title">Study</h3>
                        <p className="activity-description">우리는 이런걸 공부합니다</p>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">📚</div>
                                <h3>CS Knowledge</h3>
                                <p>자료구조, 알고리즘, AI/ML/DL 등 컴퓨터 과학의 핵심 지식을 정기적으로 학습합니다.</p>
                                <a
                                    href="https://github.com/DOforTU/note-cs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="repo-link"
                                >
                                    📖 Study Repository
                                </a>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💡</div>
                                <h3>Problem Solving</h3>
                                <p>알고리즘 문제를 함께 풀고 다양한 풀이 방법을 공유하며 실력을 향상시킵니다.</p>
                                <a
                                    href="https://github.com/DOforTU/problem-solving"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="repo-link"
                                >
                                    🧩 Problem Repository
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
