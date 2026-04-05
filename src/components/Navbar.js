import React, { useEffect, useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <nav className="portfolio-nav">
                <a className="nav-logo" href="#top" onClick={closeMenu}>
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
                <button
                    type="button"
                    className={`nav-burger${isOpen ? " is-open" : ""}`}
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <button
                type="button"
                className={`nav-mobile-backdrop${isOpen ? " open" : ""}`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
                tabIndex={isOpen ? 0 : -1}
            />

            <div
                className={`nav-mobile-menu${isOpen ? " open" : ""}`}
                id="mobile-menu"
            >
                <a href="#experience" onClick={closeMenu}>
                    Experience
                </a>
                <a href="#projects" onClick={closeMenu}>
                    Projects
                </a>
                <a href="#blogs" onClick={closeMenu}>
                    Blogs
                </a>
                <a
                    href="https://github.com/siddhantshr"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                >
                    GitHub ↗
                </a>
            </div>
        </>
    )
}

export default Navbar
