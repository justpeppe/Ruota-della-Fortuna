import { useEffect, useRef, useState } from 'react';

/**
 * Hook per calcolare il fattore di scala e compensare l'altezza.
 * naturalWidth: la larghezza "ideale" per cui è disegnata la griglia (~900px).
 */
export const useBoardScale = (naturalWidth = 900) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState('auto');

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        // Calcola la scala in base alla larghezza disponibile
        const availableWidth = entry.contentRect.width;
        const newScale = Math.min(1, availableWidth / naturalWidth);
        setScale(newScale);

        // Calcola l'altezza reale occupata dopo la scala
        const naturalHeight = contentRef.current.offsetHeight;
        setScaledHeight(naturalHeight * newScale);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [naturalWidth]);

  return { containerRef, contentRef, scale, scaledHeight };
};
