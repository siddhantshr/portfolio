import React from "react"

export const Navbar = () => {
    return (
        <>
            <div
                className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400 body-font"
                id="home"
            >
                <a
                    href="https://github.com/AHiddenDonut"
                    className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
                >
                    <img
                        src={require("../images/cat.png")}
                        width="50"
                        height="50"
                        alt="logo lol"
                        className="circle_image"
                    />
                    <span className="ml-3 text-xl xl:block lg:hidden">S1D</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white" href="#home">
                        Home
                    </a>
                    <a className="mr-5 hover:text-white" href="#projects">
                        Projects
                    </a>
                    <a
                        className="mr-5 hover:text-white"
                        href="https://github.com/AHiddenDonut"
                    >
                        Github
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Navbar
