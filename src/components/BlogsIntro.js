import React from "react"
import { blogItems } from "./portfolioData"

const BlogsIntro = () => {
    return (
        <section className="section" id="blogs">
            <div className="section-label">Writing</div>
            <h2 className="section-title">Featured Blogs</h2>

            <div className="blogs-grid">
                {blogItems.map((blog) => (
                    <a
                        className="featured-blog-card reveal-on-scroll"
                        href={blog.href}
                        key={blog.title}
                    >
                        <div className="featured-blog-meta">
                            <span className="featured-blog-tag">{blog.tag}</span>
                            <span className="featured-blog-date">{blog.date}</span>
                        </div>
                        <div className="featured-blog-title">{blog.title}</div>
                        <p className="featured-blog-excerpt">{blog.excerpt}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default BlogsIntro
