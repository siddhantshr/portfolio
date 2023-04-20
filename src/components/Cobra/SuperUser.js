import React from "react"
import "./Cobra.css"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import useSound from 'use-sound';
import sound from "./numbers.mp3"

const SuperUser = () => {
    React.useEffect(() => {
        checkAuth()
    })
    const [loading, setLoading] = React.useState(false)
    const [muted, setMuted] = React.useState(true)
    const [play, {stop}] = useSound(sound )
    const cookies = new Cookies()

    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    function mute() {
        if (muted === true) play()
        else stop()
        setMuted(!muted)
    }

    const Navigate = useNavigate()

    function logout() {
        stop()
        cookies.remove("jwt_auth", { path: "/cobra" })
        window.location.href = "/cobra"
    }

    async function checkAuth() {
        let authToken = cookies.get("jwt_auth")

        const response = await fetch(
            "https://maverick.sidshr.xyz/checkAuth",
            {
                method: "GET",
                headers: { authorization: `Bearer ${authToken}` },
            }
        )

        if (response.status !== 200) {
            stop()
            cookies.remove("jwt_auth", { path: "/cobra" })
            Navigate("/cobra")
        }
    }

    async function lambdaToggle() {
        let authToken = cookies.get("jwt_auth")

        const response = await fetch(
            "https://maverick.sidshr.xyz/lambdaToggle",
            {
                method: "GET",
                headers: { authorization: `Bearer ${authToken}` },
            }
        )

        if (response.status !== 200) {
            stop()
            cookies.remove("jwt_auth", { path: "/cobra" })
            Navigate("/cobra")
        }
    }

    /* LOGOUT */

    return (
        <>
            <div className="cobra-parent">
                <video
                    src={`${process.env.PUBLIC_URL}/assets/demon.mp4`}
                    autoPlay
                    loop
                    muted
                />
                {/* <audio
                    src={`${process.env.PUBLIC_URL}/assets/numbers.mp3`}
                    autoPlay
                    loop
                /> */}
            </div>
            <div className="cobra-login py-8 font-bold" id="welcome">
                WELCOME SUPERUSER!
            </div>
            <div
            className={`cobra-login ${loading === true ? "" : "invisible"}`}
            >
                <div className="mx-auto text-green-600 font-extrabold modal">
                    ACCESS GRANTED
                </div>
            </div>
            <div className="icons">
                <div>
                    <i onClick={() => window.location.href = "/"} className="fa-solid fa-house-user text-5xl py-4 px-6"></i>
                </div>
                <div>
                    <i onClick={() => logout()} className="fa-solid fa-right-from-bracket text-5xl py-4 px-6"></i>
                </div>
                <div>
                    <i onClick={() => mute()} className="fa-solid fa-microphone-lines text-5xl py-4 px-6"></i>
                </div>
                <div>
                    <img onClick={() => lambdaToggle()} className="py-4 px-5 w-22 h-20" src={`${process.env.PUBLIC_URL}/assets/lambda.png`} alt="" />
                </div>
            </div>
        </>
    )
}

export default SuperUser
