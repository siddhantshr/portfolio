import React, { useState, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
    const [query, setQuery] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if (!query) {
            alert("NO")
        } else {
            let formattedQuery = encodeURIComponent(query.replace(/ /g, "+"))
            window.open(
                `https://github.com/search?q=user%3Asiddhantshr+${formattedQuery}&type=repositories`,
                "_blank"
            )
        }
    }
    const get_years_ago = (timestamp) => {
        let date = new Date(timestamp * 1000)
        let age = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 365)
        console.log(age.toFixed(2))
        return age.toFixed(2)
    }
    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    })
    return (
        <>
            <section className="text-gray-400 body-font" data-aos="fade">
                <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hello,
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I'm Siddhant, a student developer.
                            <br />
                            <br />I have been coding since{" "}
                            {get_years_ago(1604581920)} years. This website
                            showcases my work and provides insights into my
                            experiences as a developer. Browse my portfolio or
                            contact me for collaboration and opportunities.
                        </p>
                        <form onSubmit={submit}>
                            <div className="flex w-full md:justify-start justify-center items-end">
                                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                    <label
                                        htmlFor="hero-field"
                                        className="leading-7 text-sm text-gray-400"
                                    >
                                        Search my github
                                    </label>
                                    <input
                                        type="text"
                                        id="hero-field"
                                        name="hero-field"
                                        className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={query}
                                        onChange={(e) =>
                                            setQuery(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                                    id="_btn"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        <h1 className="title-font sm:text-3xl text-3xl mt-6 mb-4 font-medium text-white">
                            I'm experienced with
                        </h1>
                        <div className="flex flex-wrap gap-5 md:text-3xl">
                            <div className="tooltip">
                                <i className="fa-brands fa-python tooltip"></i>
                                <span className="tooltipText">Python</span>
                            </div>
                            <div className="tooltip">
                                <i className="fa-solid fa-database tooltip"></i>
                                <span className="tooltipText">SQL</span>
                            </div>
                            <div className="tooltip">
                                <i className="fa-brands fa-discord tooltip"></i>
                                <span className="tooltipText">
                                    Discord API & Bots
                                </span>
                            </div>
                            <div className="tooltip">
                                <i className="fa-brands fa-node-js tooltip"></i>
                                <span className="tooltipText">NodeJS</span>
                            </div>
                            <div className="tooltip">
                                <i className="fa-solid fa-hat-cowboy tooltip"></i>
                                <span className="tooltipText">
                                    Pentest - Metasploit etc.
                                </span>
                            </div>
                            <div className="tooltip">
                                <i className="fa-solid fa-terminal"></i>
                                <span className="tooltipText">
                                    Terminal- .sh code
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className="sign">
                            <span className="sign__word">Student</span>
                            {/* <span className="sign__word">stack</span> */}
                            <span className="sign__word">Dev!</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
