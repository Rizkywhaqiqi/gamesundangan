import { wedding } from "@/lib/wedding-config";

export function ThankYou() {
  return (
    <div className="text-center">
      <p className="font-serif text-lg italic text-foreground">
        Terima kasih telah menjadi bagian dari hari spesial kami.
      </p>
      <div className="my-4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <p className="font-serif text-2xl text-primary">
        {wedding.groom} &amp; {wedding.bride}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Kehadiran &amp; doa restu Anda adalah hadiah terindah bagi kami.
      </p>
    </div>
  );
}
