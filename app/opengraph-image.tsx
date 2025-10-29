import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

const bgGradientLight = "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
const bgGradientDark = "linear-gradient(180deg, #0b0b0c 0%, #111827 100%)"

function CoffeeSVG({ fill = "#94a3b8" }: { fill?: string }) {
  // Simple coffee mug icon
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 7h10v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7z" stroke={fill} strokeWidth="1.5" />
      <path d="M14 9h2.5a2.5 2.5 0 1 1 0 5H14" stroke={fill} strokeWidth="1.5" />
      <path d="M7 3c0 1 .8 1.2.8 2.2S7 6 7 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 3c0 1 .8 1.2.8 2.2S10 6 10 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 3c0 1 .8 1.2.8 2.2S13 6 13 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ParticlesSVG({ color = "rgba(0,0,0,0.12)" }: { color?: string }) {
  // Static scattered dots to simulate particles in OG (no animation in image)
  const dots = Array.from({ length: 80 }).map((_, i) => {
    const x = Math.random() * size.width
    const y = Math.random() * size.height
    const r = 1 + Math.random() * 1.2
    return { x, y, r }
  })
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {dots.map((d, idx) => (
        <circle key={idx} cx={d.x} cy={d.y} r={d.r} fill={color} />
      ))}
    </svg>
  )
}

export default function Image() {
  // Use dark variant for OG background
  const isDark = true

  return new ImageResponse(
    (
      <div
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundImage: isDark ? bgGradientDark : bgGradientLight,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial',
        }}
      >
        {/* Particles layer */}
        <ParticlesSVG color={isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)"} />

        {/* Content centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: 48,
            maxWidth: 920,
            zIndex: 1,
            gap: 18,
          }}
        >
          {/* Coffee mug above brand */}
          <CoffeeSVG fill={isDark ? "#94a3b8" : "#64748b"} />
          {/* Brand */}
          <div
            style={{
              color: isDark ? "#cbd5e1" : "#334155",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 0.2,
            }}
          >
            {"<SamiNafis />"}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              color: isDark ? "#ffffff" : "#0b1220",
            }}
          >
            Sami Nafis
          </div>

          {/* About centered */}
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: isDark ? "#e5e7eb" : "#334155",
              maxWidth: 880,
            }}
          >
            Full‑stack developer specializing in JavaScript, Python, .NET, and cloud. I build fast, accessible web apps with great UX.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
