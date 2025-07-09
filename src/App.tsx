import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
