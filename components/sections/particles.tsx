"use client"

import { Box } from "@chakra-ui/react"
import * as React from "react"
import { useColorModeValue } from "@/components/ui/color-mode"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function ParticlesBackground({
  density = 40,
  speed = 0.5,
  connectDistance = 110,
  disabled = false,
  zIndex = 0,
}: {
  density?: number
  speed?: number
  connectDistance?: number
  disabled?: boolean
  zIndex?: number | string
}) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const rafRef = React.useRef<number | null>(null)
  const particlesRef = React.useRef<Particle[]>([])
  const prefersReduced = React.useMemo(
    () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  )

  const dot = useColorModeValue("rgba(0,0,0,0.35)", "rgba(255,255,255,0.35)")
  const line = useColorModeValue("rgba(0,0,0,0.12)", "rgba(255,255,255,0.12)")

  const resize = React.useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = Math.max(1, Math.floor(width * dpr))
    canvas.height = Math.max(1, Math.floor(height * dpr))
  }, [])

  const initParticles = React.useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const count = density
    const arr: Particle[] = []
    const w = canvas.width
    const h = canvas.height
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 1 + Math.random() * 1.5,
      })
    }
    particlesRef.current = arr
  }, [density, speed])

  const step = React.useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const w = canvas.width
    const h = canvas.height

    ctx.clearRect(0, 0, w, h)

    const pts = particlesRef.current

    // Move
    for (const p of pts) {
      if (!prefersReduced) {
        p.x += p.vx
        p.y += p.vy
      }
      if (p.x < 0) p.x = w
      if (p.x > w) p.x = 0
      if (p.y < 0) p.y = h
      if (p.y > h) p.y = 0
    }

    // Draw lines
    if (!prefersReduced) {
      ctx.strokeStyle = line
      ctx.lineWidth = 1
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.hypot(dx, dy)
          if (d < connectDistance) {
            ctx.globalAlpha = 1 - d / connectDistance
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    // Draw dots
    ctx.fillStyle = dot
    for (const p of pts) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }

    rafRef.current = requestAnimationFrame(step)
  }, [connectDistance, dot, line, prefersReduced])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onResize = () => {
      resize()
      initParticles()
    }

    resize()
    initParticles()
    // If disabled or reduced, draw a single static frame; else animate
    if (disabled || prefersReduced) {
      // Draw one frame
      step()
    } else {
      rafRef.current = requestAnimationFrame(step)
    }

    window.addEventListener("resize", onResize)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [initParticles, resize, step, disabled, prefersReduced])

  return (
    <Box position="absolute" inset={0} zIndex={zIndex} pointerEvents="none">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </Box>
  )
}
