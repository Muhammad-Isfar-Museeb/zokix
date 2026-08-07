import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Abdullah's Portfolio | Zokix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const heroData = readFileSync(
    join(process.cwd(), "public/work/abdullah-portfolio-hero-og.jpg")
  ).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#050505",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${heroData}`}
          style={{
            width: "1200px",
            height: "630px",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 64,
            background:
              "linear-gradient(0deg, rgba(5,5,5,0.92) 25%, rgba(5,5,5,0.15) 75%)",
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
            ZOKIX PRESENTS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 900,
              color: "#ece7de",
            }}
          >
            ABDULLAH
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.2em",
              color: "#faf8f3",
            }}
          >
            GRAPHIC DESIGNER & VISUAL CREATIVE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
