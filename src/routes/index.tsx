import { createFileRoute } from "@tanstack/react-router";
import { World } from "@/components/wedding/World";
import bg from "@/assets/background.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const ogImage = typeof window === "undefined"
      ? `https://id-preview--2633b00c-80a4-4221-a636-9da0642257b2.lovable.app${bg}`
      : `${window.location.origin}${bg}`;
    return {
      meta: [
        { title: "Undangan Pernikahan — Lionel & Gianni" },
        { name: "description", content: "Undangan digital interaktif Lionel Messi & Gianni Infantino. Jelajahi taman, buka setiap checkpoint, dan kirim ucapan." },
        { property: "og:title", content: "Undangan Pernikahan Lionel & Gianni" },
        { property: "og:description", content: "Jelajahi undangan interaktif kami dan sampaikan doa terbaikmu." },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
    };
  },
  component: Index,
});

function Index() {
  return <World />;
}
