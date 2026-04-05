import React from "react"

const stats = [
    { value: "5+", label: "Years Coding" },
    { value: "4+", label: "Projects Shipped" },
    { value: "IIT B", label: "Aerospace Engg" },
    { value: "Sub-15", label: "3x3 Speedcube Avg" },
]

const StatsBar = () => {
    return (
        <div className="stats-bar reveal-on-scroll">
            {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                    <span className="stat-num">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                </div>
            ))}
        </div>
    )
}

export default StatsBar
