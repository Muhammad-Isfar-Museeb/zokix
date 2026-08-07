import { ImageResponse } from "next/og";

export const alt = "Zokix — AI-Powered Creative Tech Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, rgba(236,231,222,0.22), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: "#ece7de",
          }}
        >
          ZOKIX
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 32,
            letterSpacing: "0.15em",
            color: "#a8a297",
          }}
        >
          AI-POWERED CREATIVE TECH STUDIO
        </div>
      </div>
    ),
    { ...size }
  );
}
