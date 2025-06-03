// hooks/useCounter.js
import { useState, useEffect } from "react";

/**
 * end: Hedef sayı
 * duration: Toplam animasyon süresi (ms). Default: 1000 (1 saniye)
 */
export default function useCounter(end, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) {
      setCount(0);
      return;
    }

    const frameRate = 30; // 30ms aralıklarla güncelleme
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;
    let current = 0;
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      current += increment;

      if (frame >= totalFrames) {
        // Son değere sabitle
        clearInterval(counterInterval);
        setCount(end);
      } else {
        setCount(Math.ceil(current)); // Yuvarlayarak göster
      }
    }, frameRate);

    return () => clearInterval(counterInterval);
  }, [end, duration]);

  return count;
}
