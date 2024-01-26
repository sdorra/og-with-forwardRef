/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-5 p-10">
      <h1 className="text-4xl font-bold">OG Image with forwardRef</h1>
      <p>
        The image below should show &quot;👋 Hello World 👋&quot;. But the
        &quot;👋 Hello&quot; is missing, because of the usage of `forwardRef`.
      </p>
      <img src="/opengraph-image" alt="OG Image" />
    </main>
  );
}
