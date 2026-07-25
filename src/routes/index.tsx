import { createFileRoute } from "@tanstack/react-router";
import { World } from "@/components/wedding/World";
import { wedding } from "@/lib/wedding-config";
import bg from "@/assets/background.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const baseUrl = typeof window !== "undefined" 
      ? window.location.origin 
      : "https://gamesundangan.vercel.app"; // Replace with your production URL
    const ogImage = `${baseUrl}${bg}`;
    const title = `Undangan Pernikahan — ${wedding.groom} & ${wedding.bride}`;
    const description = `Undangan digital interaktif ${wedding.groom} & ${wedding.bride}. ${wedding.hashtag}. Jelajahi taman, buka setiap checkpoint, dan kirim ucapan.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
