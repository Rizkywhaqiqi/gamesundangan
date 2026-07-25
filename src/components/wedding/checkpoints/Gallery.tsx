export function Gallery() {
  const images = [
    "https://i.ibb.co/1n2XwY0/gallery-1.jpg",
    "https://i.ibb.co/0Q8Z9vL/gallery-2.jpg",
    "https://i.ibb.co/6Y2q8k9/gallery-3.jpg",
    "https://i.ibb.co/1n2XwY0/gallery-4.jpg",
    "https://i.ibb.co/0Q8Z9vL/gallery-5.jpg",
    "https://i.ibb.co/6Y2q8k9/gallery-6.jpg"
  ];

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
