import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  onHold: (dir: "left" | "right") => void;
  onRelease: () => void;
  facing: "left" | "right";
  moving: "left" | "right" | null;
  disabled?: boolean;
};

export function Controls({ onHold, onRelease, disabled }: Props) {
  const handlers = (dir: "left" | "right") => ({
    onPointerDown: (e: React.PointerEvent) => {
      if (disabled) return;
      e.preventDefault();
      (e.target as Element).setPointerCapture?.(e.pointerId);
      onHold(dir);
    },
    onPointerUp: (e: React.PointerEvent) => {
      e.preventDefault();
      onRelease();
    },
    onPointerCancel: () => onRelease(),
    onPointerLeave: () => onRelease(),
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  });

  return (
    <div className="absolute bottom-6 inset-x-0 flex items-center justify-between px-6 pointer-events-none">
      <button
        aria-label="Jalan ke kiri"
        disabled={disabled}
        {...handlers("left")}
        className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl ring-2 ring-white active:scale-95 active:bg-primary active:text-white disabled:opacity-40 transition touch-none"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <div className="pointer-events-none rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
        Tekan &amp; tahan untuk jalan
      </div>
      <button
        aria-label="Jalan ke kanan"
        disabled={disabled}
        {...handlers("right")}
        className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl ring-2 ring-white active:scale-95 active:bg-primary active:text-white disabled:opacity-40 transition touch-none"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}
