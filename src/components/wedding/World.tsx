import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import bg from "@/assets/background.webp";
import idle from "@/assets/idle.gif";
import leftGif from "@/assets/left.gif";
import rightGif from "@/assets/right.gif";
import walkMp3 from "@/assets/walk.mp3";
import { checkpoints, type Checkpoint, type CheckpointId } from "@/lib/wedding-config";
import { CheckpointModal } from "./CheckpointModal";
import { Controls } from "./Controls";
import { sanitizeGuestName } from "@/lib/sanitize";
import { Opening } from "./checkpoints/Opening";
import { CoupleStory } from "./checkpoints/CoupleStory";
import { EventDetails } from "./checkpoints/EventDetails";
import { Gallery } from "./checkpoints/Gallery";
import { RsvpForm } from "./checkpoints/Rsvp";
import { Wishes } from "./checkpoints/Wishes";
import { ThankYou } from "./checkpoints/ThankYou";

const BG_WIDTH = 1920;
const BG_HEIGHT = 813;
const BG_ASPECT = BG_WIDTH / BG_HEIGHT; // ~2.361
const CHARACTER_HEIGHT = 120; // px
const NEAR_THRESHOLD = 90; // px around a checkpoint to allow "open"
const WALK_SPEED = 3; // px per frame
const CHECKPOINT_PADDING = 100; // Ruang ekstra untuk interaksi checkpoint


type Direction = "left" | "right" | null;

function renderCheckpoint(id: CheckpointId, guestName: string, onClose: () => void) {
  switch (id) {
    case "opening": return <Opening guestName={guestName} onClose={onClose} />;
    case "couple": return <CoupleStory />;
    case "event": return <EventDetails />;
    case "gallery": return <Gallery />;
    case "rsvp": return <RsvpForm defaultName={guestName} />;
    case "wishes": return <Wishes defaultName={guestName} />;
    case "thanks": return <ThankYou />;
  }
}

export function World() {
  const [viewport, setViewport] = useState({ w: 360, h: 640 });
  const [playerX, setPlayerX] = useState(0);
  const playerRef = useRef(0);
  const [cameraX, setCameraX] = useState(0);
  const cameraRef = useRef(0);
  const [minCameraX, setMinCameraX] = useState(0);
  const [maxCameraX, setMaxCameraX] = useState(0);
  const initializedRef = useRef(false);
  const [facing, setFacing] = useState<"left" | "right">("right");
  const [moving, setMoving] = useState<Direction>(null);
  const [openId, setOpenId] = useState<CheckpointId | null>(null);
  const [visited, setVisited] = useState<Set<CheckpointId>>(new Set());
  const [guestName, setGuestName] = useState("");
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Direct DOM refs for smooth animation (bypass React re-renders)
  const worldRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLImageElement>(null);
  const promptRef = useRef<HTMLButtonElement>(null);
  const visitedRef = useRef<Set<CheckpointId>>(new Set());

  // read ?to= after hydration
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestName(sanitizeGuestName(params.get("to")));
  }, []);

  // Lock body scrolling while world is mounted
  useEffect(() => {
    document.body.classList.add("invitation-lock");
    return () => document.body.classList.remove("invitation-lock");
  }, []);

  // Track viewport size
  useEffect(() => {
    const measure = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // World width = background aspect * viewport height (so bg fills world exactly)
  const worldWidth = Math.max(viewport.w, Math.round(viewport.h * BG_ASPECT));

  // Camera bounds: never reveal outside the world
  const calculatedMinCameraX = 0;
  const calculatedMaxCameraX = Math.max(0, worldWidth - viewport.w);

  // Update camera bounds when worldWidth or viewport changes
  useEffect(() => {
    setMinCameraX(calculatedMinCameraX);
    setMaxCameraX(calculatedMaxCameraX);
  }, [calculatedMinCameraX, calculatedMaxCameraX]);

  // Set initial player position to Checkpoint 1 and camera to left edge
  useEffect(() => {
    if (!initializedRef.current && maxCameraX >= 0) {
      initializedRef.current = true;
      const startX = checkpoints[0].xPercent * worldWidth;
      playerRef.current = startX;
      setPlayerX(startX);
      cameraRef.current = 0;
      setCameraX(0);
    }
  }, [maxCameraX, worldWidth]);

  // Clamp helpers - independent limits for player and camera
  const clampPlayer = useCallback(
    (n: number) => Math.max(0, Math.min(worldWidth, n)),
    [worldWidth],
  );
  const clampCamera = useCallback(
    (n: number) => Math.max(minCameraX, Math.min(maxCameraX, n)),
    [minCameraX, maxCameraX],
  );


  // Animation loop - optimized with direct DOM manipulation
  useEffect(() => {
    if (!moving) return;
    let raf = 0;
    let frameCount = 0;
    
    const step = () => {
      const delta = moving === "right" ? WALK_SPEED : -WALK_SPEED;
      const nextPlayer = clampPlayer(playerRef.current + delta);
      playerRef.current = nextPlayer;

      // Camera follows player but stays clamped to world boundaries
      const targetCamera = nextPlayer - viewport.w / 2;
      const nextCamera = clampCamera(targetCamera);
      cameraRef.current = nextCamera;

      // Direct DOM manipulation for smooth 60fps (bypass React)
      if (worldRef.current) {
        worldRef.current.style.transform = `translate3d(${-nextCamera}px,0,0)`;
      }
      if (characterRef.current) {
        characterRef.current.style.left = `${nextPlayer - nextCamera}px`;
      }
      if (promptRef.current && nearestRef.current) {
        promptRef.current.style.left = `${nextPlayer - nextCamera}px`;
      }

      // Update React state less frequently (every 3 frames) for UI updates
      frameCount++;
      if (frameCount % 3 === 0) {
        setPlayerX(nextPlayer);
        setCameraX(nextCamera);
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [moving, clampPlayer, clampCamera, viewport.w]);

  // Sfx handling
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (moving) {
      el.currentTime = 0;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [moving]);

  // Auto-open opening on first mount
  useEffect(() => {
    const t = setTimeout(() => {
      if (!started) {
        setOpenId("opening");
      }
    }, 500);
    return () => clearTimeout(t);
  }, [started]);

  // Mark visited whenever modal opens
  useEffect(() => {
    if (!openId) return;
    visitedRef.current = new Set([...visitedRef.current, openId]);
    setVisited(visitedRef.current);
  }, [openId]);

  const start = (dir: "left" | "right") => {
    setFacing(dir);
    setMoving(dir);
    setStarted(true);
  };
  const stop = () => setMoving(null);

  // Keyboard controls
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (openId) return;
      if (e.key === "ArrowRight") { e.preventDefault(); start("right"); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); start("left"); }
    };
    const up = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") stop();
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [openId]);

  // Nearest checkpoint - use ref to avoid re-renders during animation
  const nearestRef = useRef<Checkpoint | null>(null);
  const [nearest, setNearest] = useState<Checkpoint | null>(null);
  
  const calculateNearest = useCallback(() => {
    let best: { cp: Checkpoint; dist: number } | null = null;
    for (const cp of checkpoints) {
      const cpX = cp.xPercent * worldWidth;
      const dist = Math.abs(cpX - playerRef.current);
      if (!best || dist < best.dist) best = { cp, dist };
    }
    return best && best.dist < NEAR_THRESHOLD ? best.cp : null;
  }, [worldWidth]);
  
  // Update nearest checkpoint less frequently
  useEffect(() => {
    if (!moving) {
      const nearestCp = calculateNearest();
      nearestRef.current = nearestCp;
      setNearest(nearestCp);
    }
  }, [moving, calculateNearest]);

  const characterSrc = moving === "left" ? leftGif : moving === "right" ? rightGif : idle;

  // Memoize checkpoint pins to prevent unnecessary re-renders
  const checkpointPins = useMemo(() => checkpoints.map((cp) => {
    const x = cp.xPercent * worldWidth;
    const done = visited.has(cp.id);
    return (
      <div
        key={cp.id}
        className="absolute bottom-[14%] -translate-x-1/2 flex flex-col items-center"
        style={{ left: x }}
      >
        <div
          className={`mb-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white shadow-md ${done ? "opacity-60" : ""}`}
          style={{ backgroundColor: cp.color }}
        >
          {cp.index}
        </div>
        <svg width="26" height="34" viewBox="0 0 24 32" className="drop-shadow-md">
          <path
            d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20C24 5.4 18.6 0 12 0z"
            fill={cp.color}
          />
          <circle cx="12" cy="11" r="4.5" fill="#fff" />
          <path
            d="M12 13.5c-1-1-3-2-3-3.6 0-1 .8-1.9 1.9-1.9.6 0 1 .3 1.1.7.1-.4.5-.7 1.1-.7 1 0 1.9.9 1.9 1.9 0 1.6-2 2.6-3 3.6z"
            fill={cp.color}
          />
        </svg>
      </div>
    );
  }), [worldWidth, visited]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#8ecae6] select-none">
      {/* Sky gradient behind the panorama */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-100" />

      {/* Scrolling world */}
      <div
        ref={worldRef}
        className="absolute top-0 h-full"
        style={{
          width: worldWidth,
          transform: `translate3d(${-cameraX}px,0,0)`,
          willChange: "transform",
        }}
      >
        <img
          src={bg}
          alt="Wedding garden panorama"
          className="absolute inset-0 h-full w-full object-cover object-bottom pointer-events-none"
          draggable={false}
        />


        {/* Checkpoint pins - memoized to prevent unnecessary re-renders */}
        {checkpointPins}
      </div>

      {/* Character position based on player world position minus camera offset */}
      <img
          ref={characterRef}
          src={characterSrc}
          alt="Couple character"
          className="absolute bottom-[20%] pointer-events-none drop-shadow-xl"
          style={{
            left: playerX - cameraX,
            height: CHARACTER_HEIGHT,
            imageRendering: "auto",
            transform: "translateX(-50%)",
          }}
          draggable={false}
        />

      {/* Top progress dots - memoized */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/25 px-3 py-1.5 backdrop-blur-sm">
        {useMemo(() => checkpoints.map((cp) => (
          <span
            key={cp.id}
            className="h-2 w-2 rounded-full transition"
            style={{ backgroundColor: visited.has(cp.id) ? cp.color : "rgba(255,255,255,0.5)" }}
          />
        )), [visited])}
      </div>

      {/* Guest banner */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center px-4">
        <p className="font-serif text-white/95 text-sm italic drop-shadow">Kepada Yth.</p>
        <p className="font-serif text-white text-lg font-semibold drop-shadow-md leading-tight">
          {guestName || "Bapak / Ibu / Saudara / i"}
        </p>
      </div>

      {/* Open-checkpoint prompt - positioned above player */}
      {nearest && !openId && (
        <button
          ref={promptRef}
          onClick={() => { stop(); setOpenId(nearest.id); }}
          className="absolute animate-bounce rounded-full bg-white/95 px-4 py-2 text-sm font-semibold shadow-lg ring-2"
          style={{
            left: playerX - cameraX,
            bottom: `calc(20% + ${CHARACTER_HEIGHT}px + 12px)`,
            transform: "translateX(-50%)",
            color: nearest.color,
            boxShadow: `0 0 0 3px ${nearest.color}55`
          }}
        >
          Buka: {nearest.title}
        </button>
      )}

      {/* Controls */}
      <Controls
        onHold={start}
        onRelease={stop}
        facing={facing}
        moving={moving}
        disabled={!!openId}
      />

      {/* SFX */}
      <audio ref={audioRef} src={walkMp3} loop preload="auto" />

      {/* Modal */}
      <CheckpointModal
        openId={openId}
        onOpenChange={(o) => { if (!o) setOpenId(null); }}
      >
        {openId && renderCheckpoint(openId, guestName, () => setOpenId(null))}
      </CheckpointModal>
    </div>
  );
}
