import { wedding, checkpoints } from "@/lib/wedding-config";

export function CoupleStory() {
  const coupleCheckpoint = checkpoints.find(cp => cp.id === "couple");
  const images = coupleCheckpoint?.images || [];

  return (
    <div className="space-y-4 text-sm text-foreground/90">
      <div className="grid grid-cols-2 gap-3">
        {[wedding.groom, wedding.bride].map((name, i) => (
          <div key={name} className="rounded-2xl bg-secondary/60 p-3 text-center">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
              {images[i] && (
                <img
                  src={images[i]}
                  alt={name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
            <p className="mt-2 font-serif text-base font-semibold">{name}</p>
            <p className="text-[11px] italic text-muted-foreground">
              {i === 0 ? "Putra dari Bpk. & Ibu Messi" : "Putri dari Bpk. & Ibu Infantino"}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-accent/30 bg-cream/60 p-4 text-center leading-relaxed">
        <p className="font-serif italic text-base">
          "Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
          kepadanya."
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
          Ar-Rum: 21
        </p>
      </div>
    </div>
  );
}
