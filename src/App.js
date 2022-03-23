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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"

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
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>S1D</title>
                        <meta property="og:type" content="website" />
                        <meta
                            property="og:url"
                            content="https://siddhantshr.me/"
                        />
                        <meta property="og:title" content="S1D" />
                        <meta
                            property="og:description"
                            content="A stacked backend developer and a noob frontend developer ._."
                        />
                        <meta
                            property="og:image"
                            content={`${process.env.PUBLIC_URL}/assets/cat.png`}
                        />

                        <meta
                            property="twitter:card"
                            content="summary_large_image"
                        />
                        <meta
                            property="twitter:url"
                            content="https://siddhantshr.me/"
                        />
                        <meta
                            property="twitter:title"
                            content="siddhantshr.me"
                        />
                        <meta
                            property="twitter:description"
                            content="A stacked backend developer and a noob frontend developer ._."
                        />
                        <meta
                            name="twitter:image"
                            content={`${process.env.PUBLIC_URL}/assets/cat.png`}
                        />
                        <meta
                            name="keywords"
                            content="Discord Bots, Siddhant Sharma, Discord API, Hyena, Vaxin Alerts, Siddhant, AHiddenDonut"
                        />
                    </Helmet>
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
                    </Routes>
                </Router>
            )}
        </>
    )
}

export default App
