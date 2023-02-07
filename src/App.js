// import logo from './logo.svg';
import "./App.css"
import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Notfound from "./components/Notfound"
import BlogsIntro from "./components/BlogsIntro"
import DiscordBots from "./components/Blogs/DiscordBots"
import Requests from "./components/Blogs/Requests"
import Lambda from "./components/Lambda"
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
            {loading ? (
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
                                    <BlogsIntro />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            exact
                            path="/blogs/discord-bots"
                            element={
                                <>
                                    <Navbar />
                                    <DiscordBots />
                                    <Footer />
                                </>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/blogs/requests"
                            element={
                                <>
                                    <Navbar />
                                    <Requests />
                                    <Footer />
                                </>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/blogs/photographies"
                            element={<Redirect />}
                        ></Route>
                        <Route
                            exact
                            path="/lambda"
                            element={<Lambda />}
                        ></Route>
                        <Route
                            exact
                            path="/maverick"
                            element={<Redirect2 />}
                        ></Route>
                    </Routes>
                </Router>
            )}
        </>
    )
}

function Redirect() {
    window.location.replace(
        "https://drive.google.com/drive/folders/1jh79c0HPXTwhVsHyG1TPseDUmoeWSsbc?usp=sharing"
    )
    return null
}

function Redirect2() {
    window.location.replace("https://maverick.sidshr.xyz/")
    return null
}

export default App
