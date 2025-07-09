import React from "react";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import "../App.css";
import "../styles/Home.css";

function Home() {
    return (
        <div className="app">
            <Header />
            <div className="wrapper" id="home-wrapper">
                <section className="section" id="intro-section">
                    {/* <h1>인트로 섹션1</h1> */}
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
