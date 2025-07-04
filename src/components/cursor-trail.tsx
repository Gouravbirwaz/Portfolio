'use client';

import { useEffect, useState } from 'react';

export function CursorTrail() {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrails((prev) => {
        const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
        const updatedTrails = [...prev, newTrail];
        if (updatedTrails.length > 20) {
          updatedTrails.shift();
        }
        return updatedTrails;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
        />
      ))}
    </>
  );
}
