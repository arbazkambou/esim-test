"use client";

import { useEffect, useState } from "react";

function useScrollbar(): number {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    function updateScrollCompletion(): void {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        // Parse the string returned from toFixed and multiply by 100
        setCompletion(
          parseFloat((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    }

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
}

export default useScrollbar;
