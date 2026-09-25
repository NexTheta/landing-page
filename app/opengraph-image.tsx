import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Theta Sound — Your personal executive assistant that works for you"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          Theta Sound
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 300,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Your personal executive assistant
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#dd0303",
            marginTop: 4,
          }}
        >
          that works for you
        </div>
      </div>
    ),
    { ...size }
  )
}
