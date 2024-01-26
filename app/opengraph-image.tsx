import React from "react";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const WithRef = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} style={{ display: "flex" }}>
      👋 Hello
    </div>
  );
});

WithRef.displayName = "WithRef";

const WithoutRef = () => {
  return (
    <div style={{ display: "flex" }}>
      World 👋
    </div>
  );
};

WithoutRef.displayName = "WithoutRef";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: 20,
        }}
      >
        <WithRef />
        <WithoutRef />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
