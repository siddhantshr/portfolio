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
import LoginScreen from "./components/Cobra/LoginScreen"
import SuperUser from "./components/Cobra/SuperUser"
import ProtectedRoute from "./components/ProtectedRoute"
import Competitions from "./components/Competitions"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, Math.random() * (3501 - 1000) + 1000)
    }, [])
    // useEffect(() => {
    //     const handleContextmenu = e => {
    //         e.preventDefault()
    //     }
    //     document.addEventListener('contextmenu', handleContextmenu)
    //     return function cleanup() {
    //         document.removeEventListener('contextmenu', handleContextmenu)
    //     }
    // }, [ ]) // <-- right click protection

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
                                    {/* <ParticleBackground/> */}
                                    <Navbar />
                                    <Hero />
                                    <Projects />
                                    <Competitions />
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
                        <Route
                            exact
                            path="/cobra"
                            element={
                                <>
                                    <LoginScreen />
                                </>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/cobra/superuser"
                            element={<ProtectedRoute />}
                        >
                            <Route
                                exact
                                path="/cobra/superuser"
                                element={
                                    <>
                                        <SuperUser />
                                    </>
                                }
                            />
                        </Route>
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
