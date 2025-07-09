import React from "react";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import IntroSection from "../components/IntroSection.tsx";
import PhilosophySection from "../components/PhilosophySection.tsx";
import WhatWeDoSection from "../components/WhatWeDoSection.tsx";
import "../App.css";

function Home() {
    return (
        <div className="app">
            <Header />
            <IntroSection />
            <PhilosophySection />
            <WhatWeDoSection />
            <Footer />
        </div>
    );
}

export default Home;
