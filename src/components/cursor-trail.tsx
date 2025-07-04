'use client';

import { useEffect, useState, useRef } from 'react';

export function CursorTrail() {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create a new trail element with a guaranteed unique ID
      const newTrail = { x: e.clientX, y: e.clientY, id: idCounter.current++ };

      setTrails((prevTrails) => {
        const updatedTrails = [...prevTrails, newTrail];
        // Keep the array size manageable to avoid performance issues
        if (updatedTrails.length > 20) {
          return updatedTrails.slice(1);
        }
        return updatedTrails;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
