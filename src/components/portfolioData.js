export const experienceItems = [
        {
        date: "Ongoing",
        role: "Developer - Reach",
        org: "DevCom IIT Bombay",
        desc: "Contributing to Reach, A one-stop solution to all your research and career needs.",
        accent: "red",
    },
    {
        date: "2025-29",
        role: "BTech - Aerospace Engineering",
        org: "Indian Institute of Technology, Bombay",
        desc: "Pursuing Aerospace Engineering at IIT Bombay after clearing JEE Advanced, with a strong interest in aviation and astro systems.",
        accent: "amber",
    },
    {
        date: "2022-25",
        role: "Team Lead - Team Mirage",
        org: "Maharaja Sawai Man Singh Vidyalaya",
        desc: "Led Team Mirage through national tech competitions including Make-A-Thon at Shaastra IIT Madras, Atomquest and Games of Codes at Techfest IIT Bombay, TechExpo at TechNiche IIT Guwahati, and RoboVR at Techfest IIT Bombay.",
    },
    {
        date: "Jun 2020",
        role: "Member - WCA",
        org: "World Cube Association",
        desc: "Reached a sub-15 average in 3x3 speedcubing and built competitive discipline, time management, and rational problem solving through consistent practice.",
        accent: "cyan",
    },
    {
        date: "Ongoing",
        role: "Member - AIAA",
        org: "American Institute of Aeronautics and Astronautics",
        desc: "Student member engaging with aerospace research, publications, and the wider global aviation and astronautics community.",
        accent: "muted",
    }
]

export const projectItems = [
    {
        type: "Discord API Bot",
        name: "The Hyena Bot",
        desc: "A moderation and utility bot built for Discord communities, with logging, automod, and server tooling. Now discontinued.",
        href: "https://github.com/siddhantshr?tab=repositories",
        image: `${process.env.PUBLIC_URL}/assets/hyena.png`,
        variant: "wolf",
    },
    {
        type: "Public Utils",
        name: "Vaxin Alerts",
        desc: "An archived vaccination slot monitor that pushed Telegram alerts as centers opened availability.",
        href: "https://github.com/siddhantshr?tab=repositories",
        image: `${process.env.PUBLIC_URL}/assets/vaxin-alerts.png`,
        variant: "vax",
    },
    {
        type: "Python / API Wrapper",
        name: "hyena-api.py",
        desc: "A Python wrapper for the Hyena Bot API, enabling developers to easily integrate its features into their own projects and applications.",
        href: "https://github.com/siddhantshr/hyena-api.py",
        image: `${process.env.PUBLIC_URL}/assets/hyena.png`,
        variant: "nova",
    },
    {
        type: "Public Utils · CV / AI",
        name: "Spades",
        desc: "A computer-vision project focused on detecting and tracking suspicious package theft activity in real time.",
        href: "https://github.com/siddhantshr?tab=repositories",
        image: `${process.env.PUBLIC_URL}/assets/spades.png`,
        variant: "spades",
    },
    {
        type: "Discord API Bot",
        name: "Mirage",
        desc: "A customizable, self-hostable evolution of Hyena Bot with moderation and automation tooling. Archived.",
        href: "https://github.com/siddhantshr?tab=repositories",
        image: `${process.env.PUBLIC_URL}/assets/mirage.png`,
        variant: "mirage",
    },
    {
        type: "Linux Daemon / Rust + Python + C",
        name: "telemetry-daemon",
        desc: "A Linux telemetry stack that collects per-process and system-wide CPU and memory metrics via /proc, stores them in SQLite, and surfaces insights through anomaly detection, heatmaps, and visualizations.",
        href: "https://github.com/siddhantshr/telemetry-daemon",
        image: `${process.env.PUBLIC_URL}/assets/daemon.jpg`,
        variant: "aurora",
    },
    {
        type: "C++ / OpenGL Simulation",
        name: "Gravity Simulator",
        desc: "A real-time N-body gravitational simulation built with C++, OpenGL, and GLFW. Features Velocity Verlet integration, adaptive timesteps, and fading orbital trails. YAML-configurable bodies.",
        href: "https://github.com/siddhantshr/gravity-simulator",
        image: `${process.env.PUBLIC_URL}/assets/gravity.jpg`,
        variant: "cosmos",
    }
]

export const blogItems = [
    {
        tag: "APIs",
        date: "Mar 2022",
        title: "Making Requests",
        excerpt: "A primer on URLs, HTTP methods, request flow, and what actually happens between a client and a server.",
        href: "/blogs/requests",
    },
    {
        tag: "Discord API",
        date: "Mar 2022",
        title: "Making a Discord Bot",
        excerpt: "A practical introduction to Discord bot development, wrappers, and the learning path behind shipping one.",
        href: "/blogs/discord-bots",
    },
    {
        tag: "Misc.",
        date: "Jul 2022",
        title: "VSCO Photographies",
        excerpt: "A collection of travel photography from my VSCO, spanning various locations and moments captured over the years.",
        href: "/blogs/photographies",
    },
]
