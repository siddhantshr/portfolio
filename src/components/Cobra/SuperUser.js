import React from "react"
import "./Cobra.css"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"

const SuperUser = () => {
    React.useEffect(() => {
        checkAuth()
    })

    const Navigate = useNavigate()

    async function checkAuth() {
        const cookies = new Cookies()
        let authToken = cookies.get("jwt_auth")

        const response = await fetch(
            "https://maverick-1-x4741070.deta.app/checkAuth",
            {
                method: "GET",
                headers: { authorization: `Bearer ${authToken}` },
            }
        )

        if (response.status !== 200) {
            cookies.remove("jwt_auth", { path: "/cobra" })
            Navigate("/cobra")
        }
    }

    return (
        <div className="cobra-parent">
            <video
                src={`${process.env.PUBLIC_URL}/assets/demon.mp4`}
                autoPlay
                loop
                muted
            />
        </div>
    )
}

export default SuperUser
