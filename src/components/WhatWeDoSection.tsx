import React from "react";
import "../styles/WhatDoWeDoSection.css";

const WhatWeDoSection = () => {
    return (
        <section className="section" id="what-do-we-do-section">
            <div className="wrapper" id="what-do-we-do-wrapper">
                <div className="what-do-we-do-content">
                    <h2 className="section-title">What Do We Do?</h2>
                    <p className="section-description">우리는 사용자를 위한 최고의 디지털 경험을 창조합니다</p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🎨</div>
                            <h3>Design Excellence</h3>
                            <p>사용자 중심의 아름답고 직관적인 디자인을 통해 최상의 사용자 경험을 제공합니다.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💻</div>
                            <h3>Web Development</h3>
                            <p>최신 기술 스택을 활용하여 빠르고 안정적인 웹 애플리케이션을 개발합니다.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📱</div>
                            <h3>Mobile First</h3>
                            <p>모바일 환경을 우선으로 고려한 반응형 디자인과 최적화된 성능을 제공합니다.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔍</div>
                            <h3>User Research</h3>
                            <p>데이터 기반의 사용자 분석을 통해 지속적인 개선과 혁신을 추구합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
