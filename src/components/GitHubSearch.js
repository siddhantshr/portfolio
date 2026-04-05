import React, { useState } from "react"

const GitHubSearch = () => {
    const [query, setQuery] = useState("")
    const [status, setStatus] = useState("idle")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    const searchGitHub = async () => {
        const trimmed = query.trim()
        if (!trimmed) {
            return
        }

        setStatus("loading")
        setError("")

        try {
            const response = await fetch(
                `https://api.github.com/search/repositories?q=${encodeURIComponent(
                    `${trimmed} user:siddhantshr`
                )}&per_page=3`
            )
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Could not reach GitHub API.")
            }

            setResults(data.items || [])
            setStatus("done")
        } catch (err) {
            setResults([])
            setStatus("error")
            setError(err.message || "Could not reach GitHub API.")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        searchGitHub()
    }

    return (
        <section className="section" id="search">
            <div className="section-label">GitHub</div>
            <h2 className="section-title github-search-title">Search My Repos</h2>
            <div className="github-search-wrap reveal-on-scroll">
                <span className="github-search-label">→ github.com/siddhantshr</span>
                <form className="github-search-row" onSubmit={handleSubmit}>
                    <input
                        className="github-search-input"
                        type="text"
                        placeholder="search repositories..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button className="github-search-btn" type="submit">
                        Search
                    </button>
                </form>

                <div className="github-result" aria-live="polite">
                    {status === "loading" && <p>Searching...</p>}
                    {status === "error" && <p>{error}</p>}
                    {status === "done" && results.length === 0 && (
                        <p>No repositories found.</p>
                    )}
                    {results.map((repo) => (
                        <div className="github-result-item" key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                {repo.full_name}
                            </a>
                            <span>{repo.description || "No description"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GitHubSearch
