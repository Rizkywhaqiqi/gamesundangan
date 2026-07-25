import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const assets = [
      { name: "Taman", src: "/background.webp", type: "image" as const },
      { name: "Musik Latar", src: "/background-music.mp3", type: "audio" as const },
      { name: "Suara Alam", src: "/ambient.mp3", type: "audio" as const },
      { name: "Efek Jalan", src: "/walk.mp3", type: "audio" as const },
      { name: "Animasi Idle", src: "/idle.gif", type: "image" as const },
      { name: "Animasi Kiri", src: "/left.gif", type: "image" as const },
      { name: "Animasi Kanan", src: "/right.gif", type: "image" as const },
    ];

    let loaded = 0;
    const total = assets.length;

    const loadAsset = (asset: typeof assets[0]): Promise<void> => {
      return new Promise((resolve) => {
        if (asset.type === "image") {
          const img = new Image();
          img.onload = () => {
            loaded++;
            setProgress(Math.round((loaded / total) * 100));
            resolve();
          };
          img.onerror = () => {
            loaded++;
            setProgress(Math.round((loaded / total) * 100));
            resolve();
          };
          img.src = asset.src;
        } else if (asset.type === "audio") {
          const audio = new Audio();
          audio.oncanplaythrough = () => {
            loaded++;
            setProgress(Math.round((loaded / total) * 100));
            resolve();
          };
          audio.onerror = () => {
            loaded++;
            setProgress(Math.round((loaded / total) * 100));
            resolve();
          };
          audio.src = asset.src;
          audio.load();
        }
      });
    };

    const loadAllAssets = async () => {
      for (const asset of assets) {
        await loadAsset(asset);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      setTimeout(() => {
        onComplete();
      }, 400);
    };

    loadAllAssets();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Simple heart icon */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-light text-gray-800 mb-8 tracking-wide">
          Undangan Pernikahan
        </h1>

        {/* Minimal progress bar */}
        <div className="w-64 h-px bg-gray-200 mx-auto mb-4 overflow-hidden">
          <div
            className="h-full bg-gray-800 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="text-sm text-gray-500 font-light">
          {progress}%
        </p>
      </div>
    </div>
  );
}