import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const BlogsIntro = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })
    return (
        <section className="text-gray-400 body-font" data-aos="fade-up">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -mx-4 -my-8 items-center justify-center">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h2 className="text-xs text-green-400 tracking-widest font-medium title-font mb-1">
                            BLOGS
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                            Featured Blogs
                        </h1>
                    </div>
                    <div className="py-8 px-4 lg:w-1/3">
                        <div className="h-full flex items-start">
                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                                    Mar
                                </span>
                                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                                    23
                                </span>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                                    APIs
                                </h2>
                                <a href="/blogs/requests">
                                    <h1 className="title-font text-xl font-medium text-white mb-3 underline">
                                        Making Requests
                                    </h1>
                                </a>
                                <p className="leading-relaxed mb-5">
                                    A client application (like a mobile app)
                                    sends a request to the server, and after the
                                    request processes the server returns a
                                    response to the client. A request includes
                                    the URL of the API endpoint and an HTTP
                                    request method...
                                </p>
                                <a
                                    className="inline-flex items-center"
                                    href="/"
                                >
                                    <img
                                        alt="blog"
                                        src={`${process.env.PUBLIC_URL}/assets/img.jpeg`}
                                        width="100"
                                        height="100"
                                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-3">
                                        <span className="title-font font-medium text-white">
                                            Siddhant
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 px-4 lg:w-1/3">
                        <div className="h-full flex items-start">
                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                                    Mar
                                </span>
                                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                                    23
                                </span>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                                    DISCORD API
                                </h2>
                                <a href="/blogs/discord-bots">
                                    <h1 className="title-font text-xl font-medium text-white mb-3 underline">
                                        Making a discord bot
                                    </h1>
                                </a>
                                <p className="leading-relaxed mb-5">
                                    Discord bot making is a very useful project
                                    to learn how to use APIs and wrappers, with
                                    it being blown up in the recent years,
                                    YouTubers like <strong>Swas.py</strong> have
                                    been giving trash tutorials. Here's what you
                                    need to learn...
                                </p>
                                <a
                                    className="inline-flex items-center"
                                    href="/blogs/discord-bots"
                                >
                                    <img
                                        alt="blog"
                                        src={`${process.env.PUBLIC_URL}/assets/img.jpeg`}
                                        width="100"
                                        height="100"
                                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-3">
                                        <span className="title-font font-medium text-white">
                                            Siddhant
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="py-8 px-4 lg:w-1/3">
                        <div className="h-full flex items-start">
                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                                    Jul
                                </span>
                                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                                    18
                                </span>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                                    CATEGORY
                                </h2>
                                <h1 className="title-font text-xl font-medium text-white mb-3">
                                    Neptune
                                </h1>
                                <p className="leading-relaxed mb-5">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <a className="inline-flex items-center">
                                    <img
                                        alt="blog"
                                        src="https://dummyimage.com/101x101"
                                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-3">
                                        <span className="title-font font-medium text-white">
                                            Henry Letham
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default BlogsIntro
