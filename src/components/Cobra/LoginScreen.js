import React, { useState } from "react"
import "./Cobra.css"
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode"
import Cookies from "universal-cookie"

const LoginScreen = () => {
    const [usr, setUsr] = useState("")
    const [pwd, setPwd] = useState("")
    const [curv, setCurv] = useState("coderain")

    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay))
    }

    const Navigate = useNavigate()

    const cookies = new Cookies()

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch(
            "https://maverick-1-x4741070.deta.app/confirmCredentials",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usr,
                    password: pwd,
                }),
            }
        )

        setPwd("")
        setUsr("")

        const data = await response.json()

        if (data.accessToken === null) {
            setCurv("demon")
            await timeout(5000)
            setCurv("coderain")
        } else {
            const decoded = jwt(data.accessToken)

            cookies.set("jwt_auth", data.accessToken, {
                expires: new Date(decoded.exp * 1000),
            })
            Navigate("/cobra/superuser")
        }
    }

    return (
        <div className="cobra-parent">
            <video
                id="coderain"
                src={`${process.env.PUBLIC_URL}/assets/${curv}.mp4`}
                autoPlay
                loop
                muted
            />
            <div
                className={`cobra-login ${curv === "demon" ? "" : "invisible"}`}
            >
                <div className="mx-auto text-red-500 font-extrabold modal">
                    ACCESS DENIED
                </div>
            </div>
            <div
                className={`cobra-login ${curv === "demon" ? "invisible" : ""}`}
            >
                <div className="py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <a
                            href="/"
                            className="flex flex-col items-center justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                            <img
                                className="w-14 h-14 mr-2 border-solid border-2 border-sky-500 rounded-full"
                                src={`${process.env.PUBLIC_URL}/assets/logo-2.png`}
                                alt="logo"
                            />
                        </a>
                        <form
                            className="mx-auto max-w-lg rounded-lg border-solid border-2 border-sky-500 bg-stone-900"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-4 p-4 md:p-8">
                                <div>
                                    <label
                                        htmlFor="usr"
                                        className="mb-2 inline-block text-sm text-gray-50 sm:text-base"
                                    >
                                        Username
                                    </label>
                                    <input
                                        name="usr"
                                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        type="text"
                                        onChange={(e) => setUsr(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="pwd"
                                        className="mb-2 inline-block text-sm text-gray-50 sm:text-base"
                                    >
                                        Password
                                    </label>
                                    <input
                                        name="pwd"
                                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        type="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
