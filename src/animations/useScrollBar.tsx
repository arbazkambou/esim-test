"use client";

import { useEffect, useState } from "react";

function useScrollbar(): number {
  const [completion, setCompletion] = useState<number>(0);

  useEffect((): (() => void) => {
    function updateScrollCompletion(): void {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const ratio = currentProgress / scrollHeight;
        setCompletion(parseFloat(ratio.toFixed(2)) * 100);
      }
    }

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
}

export default useScrollbar;
