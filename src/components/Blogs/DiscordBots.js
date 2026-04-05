import React from "react"
import BlogLayout from "../BlogLayout"

const DiscordBots = () => {
    return (
        <BlogLayout
            eyebrow="Discord API"
            title="Making Discord Bots"
            summary="A practical path for learning Discord bot development without getting trapped in shallow tutorials."
            meta="Written from hands-on bot-building experience."
            accent="blue"
        >
            <section className="blog-section">
                <img
                    className="blog-hero-image"
                    alt="Discord developers"
                    src={`${process.env.PUBLIC_URL}/assets/discord-devs.webp`}
                />
                <p className="blog-lead">
                    <em>Written by a Verified Discord Bot Developer btw...</em>
                </p>
                <p>
                    Discord bot making is a very useful project to learn how to
                    use APIs and wrappers, with it being blown up in the recent
                    years, YouTubers like <strong>Swas.py</strong> have been
                    giving trash tutorials. Here&apos;s what you need to
                    learn...
                </p>
            </section>

            <section className="blog-section">
                <h2>What are discord bots?</h2>
                <p>
                    Bots on Discord are applications that automate work inside a
                    server. They can perform several useful tasks on your
                    server automatically. That includes welcoming any new
                    members, banning troublemakers, and moderating the
                    discussion. Some bots even add music or games to your
                    server. Keep in mind, this is not a tutorial, this is what
                    you should learn.
                </p>
            </section>

            <section className="blog-section">
                <h2>The Discord API</h2>
                <p>
                    The Discord API consists of two separate pieces: the
                    WebSocket and REST APIs. Broadly speaking, the WebSocket
                    API is used to receive events from Discord in real time,
                    while the REST API is used to perform actions inside of
                    Discord.
                </p>
            </section>

            <section className="blog-section">
                <h2>Rest &amp; Websocket API</h2>
                <div className="blog-callout">
                    Discord&apos;s Gateway API is used for maintaining
                    persistent, stateful websocket connections between your
                    client and Discord&apos;s servers. These connections are
                    used for sending and receiving real-time events your client
                    can use to track and update local state.
                    <br />
                    <br />
                    In short, WebSocket API is used to receive events from
                    discord, like the message creation, user ban or kick,
                    message edit or deletion, user updates etc.
                    <br />
                    <br />
                    The Rest API is used by the bots to perform general
                    operations and query for information. The Rest API call is
                    used by the bot to ask discord to do a general operation
                    such as send a message, ban or kick a user etc.
                </div>
                <img
                    className="blog-wide-image"
                    alt="REST versus WebSocket diagram"
                    src={`${process.env.PUBLIC_URL}/assets/rest-websocket.webp`}
                />
            </section>

            <section className="blog-section">
                <h2>Tools &amp; Wrappers</h2>
                <p>
                    Keeping in mind, you have a basic knowledge and
                    understanding of the language you are going to be using,
                    while it&apos;s always a good idea to have some
                    understanding of every level of your technology stack, using
                    the Discord WebSocket and REST APIs directly is
                    time-consuming, error-prone, generally unnecessary, and in
                    fact dangerous. The libraries officially mentioned by
                    Discord are generally mature, well-documented, and feature
                    full coverage of the Discord API. The most popular
                    libraries are:
                </p>
                <ul className="blog-list">
                    <li>
                        <a
                            href="https://github.com/Rapptz/discord.py"
                            target="_blank"
                            rel="noreferrer"
                        >
                            discord.py
                        </a>{" "}
                        is the standard choice in Python.
                    </li>
                    <li>
                        <a
                            href="https://github.com/discordjs/discord.js"
                            target="_blank"
                            rel="noreferrer"
                        >
                            discord.js
                        </a>{" "}
                        is the standard choice in Node.js.
                    </li>
                    <li>
                        Discord also maintains an official list of{" "}
                        <a
                            href="https://discord.com/developers/docs/topics/community-resources#libraries"
                            target="_blank"
                            rel="noreferrer"
                        >
                            community libraries
                        </a>
                        .
                    </li>
                </ul>
            </section>

            <section className="blog-section">
                <h2>Making the Bot</h2>
                <p>
                    To make the bot itself, learn the required language and
                    install the package or library. Make the bot application and
                    code the bot, host it using free services like Heroku or
                    use a <strong>paid VPS</strong> service like DigitalOcean
                    for the best possible hosting. To code the best bot, you
                    need to read documentation for the library, know your
                    language well, and not fall into servers and tutorials like
                    <strong> Swas.py&apos;s </strong> server and YouTube
                    channel.
                </p>
            </section>

            <section className="blog-section">
                <h2>Got stuck?</h2>
                <p>
                    Can&apos;t seem to fix an error? Or have a general doubt.
                    Ask for help in popular coding servers like:
                </p>
                <ul className="blog-list">
                    <li>
                        <a href="https://discord.gg/python" target="_blank" rel="noreferrer">
                            Python
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/dpy" target="_blank" rel="noreferrer">
                            Discord.py
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/djs" target="_blank" rel="noreferrer">
                            Discord.js
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/code" target="_blank" rel="noreferrer">
                            The Coding Den
                        </a>
                    </li>
                    <li>
                        Most importantly, learn to use Google and{" "}
                        <a
                            href="https://stackoverflow.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Stack Overflow
                        </a>
                    </li>
                </ul>
                <img
                    className="blog-inline-image"
                    alt="Google it graphic"
                    src={`${process.env.PUBLIC_URL}/assets/google-it.jpeg`}
                />
            </section>

            <section className="blog-section">
                <h2>Verification</h2>
                <p>
                    So, you published your bot and you got a huge success, your
                    bot blew up and reached 75 servers. Verification means that
                    Discord can release features that give developers more
                    control over Discord. It means Discord can encourage users
                    to adopt bots within Discord, instead of scouring the
                    internet. It also means that bots can safely grow orders of
                    magnitude larger than they are today.
                </p>
                <p>
                    Protecting user privacy and security, as well as
                    maintaining trust, is Discord&apos;s responsibility. Fill
                    up a simple form in the Dev Portal and get your bot
                    verified. Read the article made by Discord on verification
                    and data whitelisting, then that&apos;s it, you are now a
                    Verified Bot Developer.
                </p>
                <div className="blog-actions">
                    <a
                        className="btn-primary"
                        href="https://discord.com/developers/applications"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Developer Portal
                    </a>
                    <a
                        className="btn-ghost"
                        href="https://discord.com/developers/docs/intro"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Discord API Docs
                    </a>
                </div>
            </section>
        </BlogLayout>
    )
}

export default DiscordBots
