import React, { useEffect, useRef } from "react"

const CursorTrail = () => {
    const canvasRef = useRef(null)
    const planeRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const plane = planeRef.current
        if (!canvas || !plane) {
            return undefined
        }

        const ctx = canvas.getContext("2d")
        if (!ctx) {
            return undefined
        }

        const media = window.matchMedia("(pointer: fine)")
        if (!media.matches) {
            plane.style.display = "none"
            return undefined
        }

        let animationFrameId = 0
        let frame = 0
        let mx = -300
        let my = -300
        let px = -300
        let py = -300
        let angleDeg = 0
        let hasEnteredOnce = false

        const PMAX = 120
        const parts = Array.from({ length: PMAX }, () => ({
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            r: 0,
            life: 0,
            maxLife: 0,
            type: 0,
            cr: 74,
            cg: 140,
            cb: 255,
        }))
        let pIdx = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const lerp = (a, b, t) => a + (b - a) * t

        const spawn = (x, y) => {
            const particle = parts[pIdx++ % PMAX]
            particle.type = Math.random() < 0.65 ? 0 : 1
            particle.maxLife =
                particle.type === 0 ? 45 + Math.random() * 25 : 18 + Math.random() * 14
            particle.life = particle.maxLife
            particle.r =
                particle.type === 0 ? 4 + Math.random() * 5 : 1.5 + Math.random() * 2.5
            particle.x = x + (Math.random() - 0.5) * 8
            particle.y = y + (Math.random() - 0.5) * 8
            particle.vx = (Math.random() - 0.5) * 0.8
            particle.vy = (Math.random() - 0.5) * 0.8 - 0.15

            if (particle.type === 0) {
                if (Math.random() < 0.5) {
                    particle.cr = 74
                    particle.cg = 140
                    particle.cb = 255
                } else {
                    particle.cr = 45
                    particle.cg = 212
                    particle.cb = 191
                }
            } else {
                particle.cr = 210
                particle.cg = 235
                particle.cb = 255
            }
        }

        const spawnBurst = (x, y, count) => {
            for (let index = 0; index < count; index += 1) {
                const particle = parts[pIdx++ % PMAX]
                particle.type = 2
                particle.maxLife = 28 + Math.random() * 16
                particle.life = particle.maxLife
                particle.r = 2 + Math.random() * 3
                particle.x = x
                particle.y = y
                const angle = Math.random() * Math.PI * 2
                const speed = 2.5 + Math.random() * 4.5
                particle.vx = Math.cos(angle) * speed
                particle.vy = Math.sin(angle) * speed
                particle.cr = 255
                particle.cg = 200
                particle.cb = 60
            }
        }

        const handleMouseMove = (event) => {
            mx = event.clientX
            my = event.clientY
            if (!hasEnteredOnce) {
                px = mx
                py = my
                hasEnteredOnce = true
            }
        }

        const handleMouseLeave = () => {
            plane.style.opacity = "0"
        }

        const handleMouseEnter = () => {
            plane.style.opacity = "1"
        }

        const handleClick = (event) => {
            spawnBurst(event.clientX, event.clientY, 14)
        }

        const tick = () => {
            animationFrameId = window.requestAnimationFrame(tick)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            if (!hasEnteredOnce) {
                return
            }

            px = lerp(px, mx, 0.16)
            py = lerp(py, my, 0.16)

            const dx = mx - px
            const dy = my - py
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist > 0.5) {
                const target = (Math.atan2(dy, dx) * 180) / Math.PI + 90
                const diff = ((target - angleDeg) % 360 + 540) % 360 - 180
                angleDeg += diff * 0.1
            }

            plane.style.transform = `translate(${px - 19}px, ${py - 19}px) rotate(${angleDeg}deg)`
            plane.style.transformOrigin = "19px 19px"

            frame += 1
            const speed = Math.min(dist, 40)
            if (frame % 2 === 0 || speed > 12) {
                const rad = ((angleDeg - 90) * Math.PI) / 180
                const exhaustX = px - Math.cos(rad) * 14
                const exhaustY = py - Math.sin(rad) * 14
                spawn(exhaustX, exhaustY)
                if (speed > 15) {
                    spawn(exhaustX, exhaustY)
                }
            }

            for (let index = 0; index < PMAX; index += 1) {
                const particle = parts[index]
                if (particle.life <= 0) {
                    continue
                }

                particle.life -= 1
                particle.x += particle.vx
                particle.y += particle.vy
                particle.vy += 0.02

                const t = particle.life / particle.maxLife
                let radius
                let alpha

                if (particle.type === 0) {
                    radius = particle.r * (1 + (1 - t) * 2)
                    alpha = Math.min(t * 4, 1) * 0.5 * t
                } else if (particle.type === 1) {
                    radius = particle.r * t
                    alpha = t * 0.85
                } else {
                    radius = particle.r * t
                    alpha = t * 0.9
                }

                if (alpha < 0.01) {
                    continue
                }

                ctx.beginPath()
                ctx.arc(particle.x, particle.y, Math.max(radius, 0.5), 0, Math.PI * 2)

                if (particle.type === 0) {
                    const gradient = ctx.createRadialGradient(
                        particle.x,
                        particle.y,
                        0,
                        particle.x,
                        particle.y,
                        radius
                    )
                    gradient.addColorStop(
                        0,
                        `rgba(${particle.cr},${particle.cg},${particle.cb},${alpha})`
                    )
                    gradient.addColorStop(
                        1,
                        `rgba(${particle.cr},${particle.cg},${particle.cb},0)`
                    )
                    ctx.fillStyle = gradient
                } else {
                    ctx.fillStyle = `rgba(${particle.cr},${particle.cg},${particle.cb},${alpha})`
                }

                ctx.fill()
            }
        }

        resize()
        tick()

        window.addEventListener("resize", resize)
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("click", handleClick)

        return () => {
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("click", handleClick)
        }
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                className="trail-canvas"
                aria-hidden="true"
            />
            <svg
                ref={planeRef}
                id="cursor-plane"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
            >
                <rect x="14" y="6" width="4" height="18" rx="2" fill="#f0f4ff" />
                <polygon points="16,1 19,8 13,8" fill="#ffffff" />
                <polygon
                    points="16,11 1,19 4,20 16,15 28,20 31,19"
                    fill="#4a8cff"
                />
                <polygon
                    points="16,22 10,30 12.5,30 16,25.5 19.5,30 22,30"
                    fill="#2dd4bf"
                />
                <circle cx="16" cy="25" r="2" fill="#2dd4bf" opacity="0.85" />
            </svg>
        </>
    )
}

export default CursorTrail
