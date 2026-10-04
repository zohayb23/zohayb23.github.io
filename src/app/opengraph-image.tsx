import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name}, Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public/headshot.png"), "base64");

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            width: 720,
          }}
        >
          <div style={{ fontSize: 30, color: "#737373" }}>{profile.location}</div>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2, marginTop: 12 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#262626", marginTop: 20, lineHeight: 1.25 }}>{profile.tagline}</div>
          <div style={{ fontSize: 24, color: "#2563eb", marginTop: 32 }}>IBM · Meta · Revanite</div>
        </div>
        <img
          src={`data:image/png;base64,${photo}`}
          alt=""
          width={480}
          height={514}
          style={{ position: "absolute", right: 40, bottom: 0 }}
        />
      </div>
    ),
    size,
  );
}
