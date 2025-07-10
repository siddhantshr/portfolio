import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 500, once: true })
    })
    return (
        <section className="text-gray-400 body-font" id="projects" data-aos="fade-up">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-24">
                    <h2 className="text-xs text-red-400 tracking-widest font-medium title-font mb-1">
                        DEVELOPEMENT
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Projects & Repositories
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={`${process.env.PUBLIC_URL}/assets/hyena.png`}
                                alt="hyena"
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                    Discord API Bot
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    The Hyena Bot
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    A useful bot that would bring great fun to
                                    your server! Configure Moderation, Logging,
                                    etc. Discontinued.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a
                                        href="https://github.com/Hyena-Bot/Hyena/"
                                        className="text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3" data-aos="fade-up">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={`${process.env.PUBLIC_URL}/assets/vaxin-alerts.png`}
                                alt="Vaxin Alerts"
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                    PUBLIC UTILS
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    Vaxin Alerts
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    A useful website ( now archived ) for
                                    monitoring Vaccination Centers. Get instant
                                    telegram updates.
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <a
                                        href="https://github.com/siddhantshr/VaxinAlerts"
                                        className="text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3" data-aos="fade-up">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={`${process.env.PUBLIC_URL}/assets/spades.png`}
                                alt="blog"
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                    PUBLIC UTILS
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    Spades
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    By utilising advanced computer vision algorithms and artificial intelligence, the system can accurately detect and track suspicious activities related to package theft in real-time.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a
                                        href="https://docs.google.com/document/d/11P1194ijKxvr_htKbo5TaKo04spvuXRxGn0M9z9Lo6Y/edit?usp=sharing"
                                        className="text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-14 mx-auto flex flex-col items-center justify-center">
                <div className="p-4 md:w-1/3" data-aos="fade-up">
                    <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={`${process.env.PUBLIC_URL}/assets/mirage.png`}
                            alt="blog"
                        />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                Discord API Bot
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                Mirage
                            </h1>
                            <p className="leading-relaxed mb-3">
                                The customisable and self hostable Hyena Bot.
                                Configure moderation, automoderation etc.{" "}
                                <strong>Archived</strong>
                            </p>
                            <div className="flex items-center flex-wrap ">
                                <a
                                    href="https://github.com/Hyena-Bot/Hyena-Hostable"
                                    className="text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
