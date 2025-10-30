"use client";
import { useRef, useState } from "react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
interface CustomVideoPlayerProps {
  src: string;
  thumbnail: string;
  alt?: string;
}

const CustomVideoPlayer = ({ src, thumbnail, alt }: CustomVideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Thumbnail Trigger */}
      <div
        onClick={openModal}
        className="relative w-full h-full cursor-pointer group"
      >
        <Image
          fill
          src={thumbnail}
          alt={alt || "Video thumbnail"}
          className="h-full w-full object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-primary w-16 h-16 rounded-full flex items-center justify-center 
                        text-white hover:text-gray-300 opacity-0 group-hover:opacity-100 transition cursor-pointer"
          >
            <PlayIcon width={28} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-9999 p-4"
          onClick={closeModal}
        >
          <div
            ref={containerRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-lg overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-3 right-3 text-white bg-primary rounded-full hover:text-gray-300 z-50 w-8 h-8 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
                !isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <XMarkIcon width={20} />
            </button>

            {/* Video */}
            <iframe
              src={src}
              className="w-full aspect-video"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomVideoPlayer;
