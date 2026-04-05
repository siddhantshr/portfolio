import React, { useEffect } from "react"
import BlogsIntro from "./BlogsIntro"
import Footer from "./Footer"
import GitHubSearch from "./GitHubSearch"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import StatsBar from "./StatsBar"
import Timeline from "./Timeline"

const PortfolioPage = () => {
    useEffect(() => {
        document.body.classList.add("portfolio-theme")

        const elements = document.querySelectorAll(".reveal-on-scroll")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )

        elements.forEach((element) => observer.observe(element))

        return () => {
            document.body.classList.remove("portfolio-theme")
            observer.disconnect()
        }
    }, [])

    return (
        <div className="portfolio-shell">
            <Navbar />
            <Hero />
            <div className="divider" />
            <StatsBar />
            <div className="divider" />
            <Timeline />
            <div className="divider" />
            <Projects />
            <div className="divider" />
            <BlogsIntro />
            <div className="divider" />
            <GitHubSearch />
            <div className="divider divider-footer" />
            <Footer />
        </div>
    )
}

export default PortfolioPage
