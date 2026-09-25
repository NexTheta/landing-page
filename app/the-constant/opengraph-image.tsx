import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "The Constant — A Day With Theta Sound"
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
          background: "#100b07",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8a7d70",
            marginBottom: 24,
          }}
        >
          Theta Sound
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 300,
            color: "#fef3e2",
            textAlign: "center",
          }}
        >
          The Constant
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#e06a22",
            marginTop: 20,
          }}
        >
          A day where one thing never changes
        </div>
      </div>
    ),
    { ...size }
  )
}
