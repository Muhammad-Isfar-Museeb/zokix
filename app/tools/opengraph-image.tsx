import { ImageResponse } from "next/og";

export const alt = "AI Tools | Zokix";
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
            fontSize: 22,
            letterSpacing: "0.35em",
            color: "#a8a297",
          }}
        >
          THE GENERATORS BEHIND ZOKIX
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 110,
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: "#ece7de",
          }}
        >
          AI TOOLS
        </div>
      </div>
    ),
    { ...size }
  );
}
