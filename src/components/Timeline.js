import React from "react"
import { experienceItems } from "./portfolioData"

const Timeline = () => {
    return (
        <section className="section" id="experience">
            <div className="section-label">Timeline</div>
            <h2 className="section-title">Experience</h2>

            <div className="timeline">
                {experienceItems.map((item) => (
                    <article className="timeline-item reveal-on-scroll" key={`${item.date}-${item.role}`}>
                        <div className="timeline-date">
                            <span>{item.date}</span>
                        </div>
                        <div className={`timeline-dot${item.accent ? ` ${item.accent}` : ""}`} />
                        <div className="timeline-content">
                            <div className="timeline-role">{item.role}</div>
                            <div className="timeline-org">{item.org}</div>
                            <p className="timeline-desc">{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Timeline
