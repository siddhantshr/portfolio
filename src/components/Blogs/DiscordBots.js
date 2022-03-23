import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import {Helmet} from "react-helmet"

const DiscordBots = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    })
    return (
        <section className="text-gray-400 body-font" data-aos="fade">
            <Helmet>
                <title>S1D</title>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://siddhantshr.me/blogs/discord-bots" />
                <meta property="og:title" content="S1D - Discord Bots" />
                <meta
                    property="og:description"
                    content="Bots on Discord, the group messaging platform, are
                    helpful artificial intelligence that can perform several
                    useful tasks on your server automatically."
                />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/discord-devs.webp`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://siddhantshr.me/blogs/discord-bots" />
                <meta property="twitter:title" content="S1D - Discord Bots" />
                <meta
                    property="twitter:description"
                    content="Bots on Discord, the group messaging platform, are
                    helpful artificial intelligence that can perform several
                    useful tasks on your server automatically."
                />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/discord-devs.webp`} />
                <meta name="keywords" content="Discord Bots, Siddhant Sharma, Discord API, Hyena, Vaxin Alerts, Siddhant, AHiddenDonut"/>
            </Helmet>
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-xs text-green-400 tracking-widest font-medium title-font mb-1">
                        Discord API
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                        Making Discord Bots
                    </h1>
                    <div className="container mx-auto flex px-5 pt-12 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src={`${process.env.PUBLIC_URL}/assets/discord-devs.webp`}
                        ></img>
                    </div>
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <p className="leading-relaxed mb-8">
                        <em>
                            Written by a Verified Discord Bot Developer btw...
                        </em>
                        <br />
                        <br />
                        Discord bot making is a very useful project to learn how
                        to use APIs and wrappers, with it being blown up in the
                        recent years, YouTubers like <strong>
                            Swas.py
                        </strong>{" "}
                        have been giving trash tutorials. Here's what you need
                        to learn...
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        What are discord bots?
                    </h1>
                    <p className="leading-relaxed mb-8">
                        Bots on Discord, the group messaging platform, are
                        helpful artificial intelligence that can perform several
                        useful tasks on your server automatically. That includes
                        welcoming any new members, banning troublemakers, and
                        moderating the discussion. Some bots even add music or
                        games to your server. Keep in mind, this is not a
                        tutorial, this is what you should learn.
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        The Discord API
                    </h1>
                    <p className="leading-relaxed mb-8">
                        The Discord API consists of two separate pieces: the
                        WebSocket and REST APIs. Broadly speaking, the WebSocket
                        API is used to receive events from Discord in real time,
                        while the REST API is used to perform actions inside of
                        Discord.
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Rest & Websocket API
                    </h1>
                    <p className="leading-relaxed mb-8">
                        Discord's Gateway API is used for maintaining
                        persistent, stateful websocket connections between your
                        client and our servers. These connections are used for
                        sending and receiving real-time events your client can
                        use to track and update local state. The Gateway API
                        uses secure websocket connections as specified in RFC
                        6455. In short, WebSocket API is used to receive events
                        from discord, like the message creation, user ban/kick,
                        message edit/deletion, user updates etc.
                        <br></br>
                        <br></br>
                        The Rest API is used by the bots to perform general
                        operations and query for information. The Rest API call
                        is used by the bot to ask discord to do a general
                        operation such as send a message, ban/kick a user etc.
                    </p>
                    <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                        <img
                            className="lg:w-4/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src={`${process.env.PUBLIC_URL}/assets/rest-websocket.webp`}
                        ></img>
                    </div>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Tools & Wrappers
                    </h1>
                    <p className="leading-relaxed mb-8">
                        Keeping in mind, you have a basic knowledge and
                        understanding of the language you are going to be using,
                        while it's always a good idea to have some understanding
                        of every level of your technology stack, using the
                        Discord WebSocket and REST APIs directly is
                        time-consuming, error-prone, generally unnecessary, and
                        in fact dangerous. The{" "}
                        <a
                            className="text-green-400"
                            href="https://discord.com/developers/docs/topics/community-resources#libraries"
                        >
                            libraries
                        </a>{" "}
                        officially mentioned by Discord are generally mature,
                        well-documented, and feature full coverage of the
                        Discord API. The most popular libraries are{" "}
                        <a
                            className="text-green-400"
                            href="https://github.com/Rapptz/discord.py"
                        >
                            discord.py
                        </a>{" "}
                        and{" "}
                        <a
                            className="text-green-400"
                            href="https://github.com/discordjs/discord.js"
                        >
                            discord.js
                        </a>
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Making the Bot
                    </h1>
                    <p className="leading-relaxed mb-8">
                        To make the bot itself, learn the required language and
                        install the package/library Make the Bot application and
                        code the bot, host it using free services like{" "}
                        <a
                            href="https://herokuapp.com/"
                            className="text-green-400"
                        >
                            Heroku
                        </a>{" "}
                        or use a <strong>paid VPS</strong> services like{" "}
                        <a
                            href="https://digitalocean.com"
                            className="text-green-400"
                        >
                            Digital Ocean
                        </a>{" "}
                        for the best possible hosting. To code the best bot, you
                        need to read documentation for the library, knowing your
                        language well and not falling into servers and tutorials
                        like <strong>Swas.py's</strong> server and YouTube
                        channel.
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Got stuck? 😏
                    </h1>
                    <p className="leading-relaxed mb-8">
                        Can't seem to fix an error? Or have a general doubt. Ask
                        for help in popular coding servers like -{" "}
                        <a
                            className="text-green-400"
                            href="https://discord.gg/python"
                        >
                            Python
                        </a>
                        ,{" "}
                        <a
                            className="text-green-400"
                            href="https://discord.gg/dpy"
                        >
                            Discord.py
                        </a>
                        ,{" "}
                        <a
                            className="text-green-400"
                            href="https://discord.gg/djs"
                        >
                            Discord.js
                        </a>
                        ,{" "}
                        <a
                            className="text-green-400"
                            href="https://discord.gg/code"
                        >
                            The Coding Den
                        </a>
                        <br />
                        <br />
                        Most importantly, learn to use google and{" "}
                        <a
                            className="text-green-400"
                            href="https://stackoverflow.com"
                        >
                            StackOverflow
                        </a>
                    </p>
                    <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src={`${process.env.PUBLIC_URL}/assets/google-it.jpeg`}
                        ></img>
                    </div>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Bot Verification
                    </h1>
                    <p className="leading-relaxed mb-8">
                        So, you published your bot and you got a huge success,
                        your bot blew up and reached 75 servers. Verification
                        means that we can release features that give developers
                        more control over Discord. It means we can encourage
                        users to adopt bots within Discord, instead of scouring
                        the internet. It also means that bots can safely grow
                        orders of magnitude larger than they are today.
                        Protecting user privacy and security, as well as
                        maintaining trust, is our utmost responsibility. We want
                        to ensure that we continue to uphold that as our bot
                        ecosystem grows.
                        <br />
                        <br />
                        Fill up a simple form in the Dev Portal and get your bot
                        verified!
                        <br />
                        Read this article made by discord on verfication -{" "}
                        <a
                            className="text-green-400"
                            href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting"
                        >
                            Bot Verification and Data Whitelisting
                        </a>
                        <br />
                        <br />
                        That's it, you are now a Verified Bot Developer! One of
                        the greatest achievement in the world of discord bot
                        dev.
                        <br />
                        <br />
                    </p>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                            onClick={() =>
                                window.open(
                                    "https://discord.com/developers/applications",
                                    "_blank"
                                )
                            }
                        >
                            Developer Portal
                        </button>
                        <button
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                            onClick={() =>
                                window.open(
                                    "https://discord.com/developers/docs/intro",
                                    "_blank"
                                )
                            }
                        >
                            Discord API Docs
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscordBots
