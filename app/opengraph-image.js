import { ImageResponse } from "next/og";

export const alt = "Kala Loka — Treasures of Karnataka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#f6e1df",
          color: "#074760",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#ee5a3c",
            marginBottom: 16,
          }}
        >
          Kala Loka
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Treasures of Karnataka
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "rgba(7, 71, 96, 0.75)",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          Six legacy GI-tagged brands of coffee, handicrafts, silk, sandal,
          handlooms and leather.
        </div>
      </div>
    ),
    size,
  );
}
