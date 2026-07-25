export const wedding = {
  groom: "Lionel Messi",
  bride: "Gianni Infantino",
  hashtag: "#LionelGianniForever",
  akad: {
    label: "Akad Nikah",
    date: "Sabtu, 12 Oktober 2026",
    time: "09:00 WIB",
    venue: "Grand Chapel, Zurich",
    address: "Bahnhofstrasse 1, Zurich, Switzerland",
    maps: "https://www.google.com/maps/search/?api=1&query=Zurich",
  },
  resepsi: {
    label: "Resepsi",
    date: "Sabtu, 12 Oktober 2026",
    time: "18:00 WIB",
    venue: "Lakeside Garden Hall",
    address: "Seestrasse 45, Zurich, Switzerland",
    maps: "https://www.google.com/maps/search/?api=1&query=Zurich",
  },
} as const;

export type CheckpointId =
  | "opening"
  | "couple"
  | "event"
  | "gallery"
  | "rsvp"
  | "wishes"
  | "thanks";

export type Checkpoint = {
  id: CheckpointId;
  index: number;
  title: string;
  subtitle: string;
  xPercent: number; // horizontal position across the world
  color: string; // pin color (hex)
  image?: string; // optional hero image URL
  images?: string[]; // optional array of image URLs (for gallery, story, etc)
};

// Positions adjusted for wider 3072px background
export const checkpoints: Checkpoint[] = [
  { 
    id: "opening", 
    index: 1, 
    title: "Opening", 
    subtitle: "Halaman Pembuka", 
    xPercent: 0.25, 
    color: "#ec4899",
    image: "https://i.ibb.co/6Y2q8k9/wedding-hero.jpg" // Replace with your hero image
  },
  { 
    id: "couple",  
    index: 2, 
    title: "Couple Story", 
    subtitle: "Kisah Kami", 
    xPercent: 0.35, 
    color: "#f97316",
    images: [
      "https://i.ibb.co/0Q8Z9vL/groom.jpg", // Replace with groom photo
      "https://i.ibb.co/1n2XwY0/bride.jpg"  // Replace with bride photo
    ]
  },
  { 
    id: "event",   
    index: 3, 
    title: "Event Details", 
    subtitle: "Detail Acara", 
    xPercent: 0.45, 
    color: "#22c55e" 
  },
  { 
    id: "gallery", 
    index: 4, 
    title: "Gallery", 
    subtitle: "Galeri Foto", 
    xPercent: 0.55, 
    color: "#3b82f6",
    images: [
      "https://i.ibb.co/1n2XwY0/gallery-1.jpg", // Replace with gallery photos
      "https://i.ibb.co/0Q8Z9vL/gallery-2.jpg",
      "https://i.ibb.co/6Y2q8k9/gallery-3.jpg",
      "https://i.ibb.co/1n2XwY0/gallery-4.jpg",
      "https://i.ibb.co/0Q8Z9vL/gallery-5.jpg",
      "https://i.ibb.co/6Y2q8k9/gallery-6.jpg"
    ]
  },
  { id: "rsvp",    index: 5, title: "RSVP",            subtitle: "Konfirmasi Kehadiran",xPercent: 0.67, color: "#a855f7" },
  { id: "wishes",  index: 6, title: "Wedding Wishes",  subtitle: "Ucapan & Doa",        xPercent: 0.77, color: "#eab308" },
  { id: "thanks",  index: 7, title: "Thank You",       subtitle: "Penutup",             xPercent: 0.85, color: "#ef4444" },
];
