import { useState, useRef } from 'react';

export default function ImageZoom({ src, alt }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="zoom-container relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 aspect-square"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain p-6 transition-transform duration-100 ease-out"
        style={{
          transform: isZoomed ? 'scale(2)' : 'scale(1)',
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
      {!isZoomed && (
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full">
          Hover to zoom
        </div>
      )}
    </div>
  );
}
