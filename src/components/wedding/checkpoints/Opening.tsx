import { Button } from "@/components/ui/button";
import { wedding } from "@/lib/wedding-config";
import { Heart } from "lucide-react";

export function Opening({ guestName, onClose }: { guestName: string; onClose: () => void }) {
  return (
    <div className="text-center">
      <div className="mb-4 overflow-hidden rounded-2xl">
        <img
          src="https://i.ibb.co/6Y2q8k9/wedding-hero.jpg"
          alt="Wedding Hero"
          className="h-48 w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <Heart className="mx-auto h-6 w-6 text-primary" />
      <p className="mt-3 text-sm text-muted-foreground">The Wedding of</p>
      <h3 className="mt-1 font-serif text-3xl leading-tight text-foreground">
        {wedding.groom}
        <span className="mx-2 text-accent">&</span>
        {wedding.bride}
      </h3>
      <p className="mt-2 text-xs text-muted-foreground italic">{wedding.hashtag}</p>
      <div className="my-4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <p className="text-sm text-muted-foreground">Kepada Yth.</p>
      <p className="font-serif text-lg font-semibold text-foreground">
        {guestName || "Bapak / Ibu / Saudara / i"}
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di hari bahagia kami.
      </p>
      <Button onClick={onClose} className="mt-5 w-full">
        Mulai Perjalanan
      </Button>
      <p className="mt-3 text-[11px] text-muted-foreground">
        Tekan & tahan tombol ← / → untuk berjalan menyusuri taman.
      </p>
    </div>
  );
}
