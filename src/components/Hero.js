import React from "react"

const skills = [
    "Python",
    "Node.js",
    "Discord.js",
    "SQL",
    "Bash",
    "Computer Vision",
]

const Hero = () => {
    return (
        <header className="hero" id="top">
            <div
                className="glow-blue"
                style={{
                    width: "600px",
                    height: "500px",
                    top: "-100px",
                    left: "-100px",
                }}
            />

            <div className="hero-left">
                <div className="hero-tag fade-up">IIT Bombay · Aerospace Engg · 2025-29</div>
                <h1 className="hero-name fade-up delay-1">
                    Hello,
                    <br />
                    I&apos;m <span>Siddhant.</span>
                </h1>
                <p className="hero-sub fade-up delay-2">
                    <strong>Aerospace student</strong> at IIT Bombay and a{" "}
                    <strong>coding enthusiast</strong> with 5+ years of building
                    bots, utilities, and tools. I turn ideas into shipped
                    software.
                </p>
                <div className="hero-actions fade-up delay-3">
                    <a href="#projects" className="btn-primary">
                        View Projects →
                    </a>
                    <a
                        href="https://linkedin.com/in/siddhant-sharma-660202214"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                    >
                        LinkedIn ↗
                    </a>
                </div>
                <div className="hero-skills fade-up delay-4">
                    {skills.map((skill) => (
                        <span key={skill} className="skill-pill">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="hero-right fade-up delay-3">
                <div className="hero-photo-wrap">
                    <div className="hero-photo-bg" />
                    <div className="hero-photo">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/pfp.jpg`}
                            alt="Siddhant"
                        />
                    </div>
                    <div className="hero-photo-label">Student Dev</div>
                </div>
            </div>
        </header>
    )
}

export default Hero
