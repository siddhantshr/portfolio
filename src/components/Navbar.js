import React from "react"

const Navbar = () => {
    return (
        <nav className="portfolio-nav">
            <a className="nav-logo" href="#top">
                <span className="nav-logo-badge">S1D</span>
                Siddhant
            </a>
            <div className="nav-links">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#blogs">Blogs</a>
                <a
                    href="https://github.com/siddhantshr"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-cta"
                >
                    GitHub ↗
                </a>
            </div>
        </nav>
    )
}

export default Navbar
