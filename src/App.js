// import logo from './logo.svg';
import "./App.css"
import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Notfound from "./components/Notfound"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, Math.random() * (3501 - 1000) + 1000)
    }, [])
    return (
        <>
            {
                loading ? (
                    <Preloader></Preloader>
                ) : (
                    <Router>
                        <Routes>
                            <Route
                                path="*"
                                element={
                                    <>
                                        <Notfound />
                                    </>
                                }
                            />
                            <Route
                                exact
                                path="/"
                                element={
                                    <>
                                        <Navbar />
                                        <Hero />
                                        <Projects />
                                        <Footer />
                                    </>
                                }
                            />
                        </Routes>
                    </Router>
                )
            }
        </>
    )
}

export default App
