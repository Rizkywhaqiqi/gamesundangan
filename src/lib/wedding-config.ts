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
};

// Positions adjusted for wider 3072px background
export const checkpoints: Checkpoint[] = [
  { id: "opening", index: 1, title: "Opening",         subtitle: "Halaman Pembuka",     xPercent: 0.10, color: "#ec4899" },
  { id: "couple",  index: 2, title: "Couple Story",    subtitle: "Kisah Kami",          xPercent: 0.23, color: "#f97316" },
  { id: "event",   index: 3, title: "Event Details",   subtitle: "Detail Acara",        xPercent: 0.37, color: "#22c55e" },
  { id: "gallery", index: 4, title: "Gallery",         subtitle: "Galeri Foto",         xPercent: 0.52, color: "#3b82f6" },
  { id: "rsvp",    index: 5, title: "RSVP",            subtitle: "Konfirmasi Kehadiran",xPercent: 0.65, color: "#a855f7" },
  { id: "wishes",  index: 6, title: "Wedding Wishes",  subtitle: "Ucapan & Doa",        xPercent: 0.79, color: "#eab308" },
  { id: "thanks",  index: 7, title: "Thank You",       subtitle: "Penutup",             xPercent: 0.92, color: "#ef4444" },
];
