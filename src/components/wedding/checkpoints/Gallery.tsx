export function Gallery() {
  const swatches = ["#f5d0a9", "#c9d9c1", "#f0c6c9", "#d5c6e0", "#f2e6b8", "#c6dfea"];
  return (
    <div>
      <p className="mb-3 text-center text-xs text-muted-foreground italic">
        Momen-momen indah kami
      </p>
      <div className="grid grid-cols-3 gap-2">
        {swatches.map((c, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl shadow-sm ring-1 ring-black/5 flex items-center justify-center font-serif text-2xl text-white/80"
            style={{ background: `linear-gradient(135deg, ${c}, #ffffff)` }}
          >
            ♥
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Foto asli akan tampil di hari-H.
      </p>
    </div>
  );
}
