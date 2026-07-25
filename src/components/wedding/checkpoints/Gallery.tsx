import { checkpoints } from "@/lib/wedding-config";

export function Gallery() {
  const galleryCheckpoint = checkpoints.find(cp => cp.id === "gallery");
  const images = galleryCheckpoint?.images || [];

  return (
    <div>
      <p className="mb-3 text-center text-xs text-muted-foreground italic">
        Momen-momen indah kami
      </p>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="h-full w-full object-cover transition-transform hover:scale-110"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Foto asli akan tampil di hari-H.
      </p>
    </div>
  );
}
