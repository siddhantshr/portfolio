import React, { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DiscordBots from "./components/Blogs/DiscordBots"
import Requests from "./components/Blogs/Requests"
import CursorTrail from "./components/CursorTrail"
import PortfolioPage from "./components/PortfolioPage"
import Notfound from "./components-old/Notfound"
import Preloader from "./components-old/Preloader"

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
                    <CursorTrail />
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
                            element={<PortfolioPage />}
                        />
                        <Route
                            exact
                            path="/blogs/discord-bots"
                            element={<DiscordBots />}
                        ></Route>
                        <Route
                            exact
                            path="/blogs/requests"
                            element={<Requests />}
                        ></Route>
                        <Route
                            exact
                            path="/blogs/photographies"
                            element={<Redirect />}
                        ></Route>
                        {/* <Route
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
                        </Route> */}
                    </Routes>
                </Router>
            )}
        </>
    )
}

function Redirect() {
    window.location.replace(
        "/photos" // Change this to the correct path for your photography blog
    )
    return null
}

// function Redirect2() {
//     window.location.replace("https://maverick.sidshr.xyz/")
//     return null
// }

export default App
