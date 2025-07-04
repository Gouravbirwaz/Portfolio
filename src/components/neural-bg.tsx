'use client';
import { useEffect, useState } from 'react';

const NUM_NODES = 20;
const NUM_CONNECTIONS = 15;

type Item = {
  id: number;
  left: string;
  top: string;
  animationDelay: string;
  width?: string;
  transform?: string;
};

export function NeuralBg() {
  const [nodes, setNodes] = useState<Item[]>([]);
  const [connections, setConnections] = useState<Item[]>([]);

  useEffect(() => {
    const generateItems = (count: number, isNode: boolean) => {
      const items: Item[] = [];
      for (let i = 0; i < count; i++) {
        const item: Item = {
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * (isNode ? 2 : 3)}s`,
        };
        if (!isNode) {
          item.width = `${Math.random() * 200 + 100}px`;
          item.transform = `rotate(${Math.random() * 360}deg)`;
        }
        items.push(item);
      }
      return items;
    };

    setNodes(generateItems(NUM_NODES, true));
    setConnections(generateItems(NUM_CONNECTIONS, false));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] opacity-20 overflow-hidden">
      {nodes.map(item => (
        <div key={`node-${item.id}`} className="neural-node" style={{ ...item }} />
      ))}
      {connections.map(item => (
        <div key={`conn-${item.id}`} className="neural-connection" style={{ ...item }} />
      ))}
    </div>
  );
}
