import React, { useEffect } from "react"
import Footer from "./Footer"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Requests", href: "/blogs/requests" },
    { label: "Discord Bots", href: "/blogs/discord-bots" },
]

const BlogLayout = ({ eyebrow, title, summary, meta, accent = "cyan", children }) => {
    useEffect(() => {
        document.body.classList.add("blog-theme")

        return () => {
            document.body.classList.remove("blog-theme")
        }
    }, [])

    return (
        <div className="blog-shell">
            <nav className="portfolio-nav">
                <a className="nav-logo" href="/">
                    <span className="nav-logo-badge">S1D</span>
                    Siddhant
                </a>
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
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

            <main className="blog-main">
                <div className={`blog-hero blog-hero-${accent}`}>
                    <p className="blog-eyebrow">{eyebrow}</p>
                    <h1 className="blog-title">{title}</h1>
                    <p className="blog-summary">{summary}</p>
                    {meta ? <div className="blog-meta-line">{meta}</div> : null}
                </div>
                <article className="blog-article">{children}</article>
            </main>

            <Footer />
        </div>
    )
}

export default BlogLayout
