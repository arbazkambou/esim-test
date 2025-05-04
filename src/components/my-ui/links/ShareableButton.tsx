"use client";

import { useState } from "react";
import { Share } from "lucide-react"; // Assuming you're using lucide-react for icons
import { cn } from "@/lib/utils";

type ShareableButtonProps = {
  url: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  text?: string;
};

const ShareableButton = ({
  url,
  className,
  children,
  title = "",
  text = "",
}: ShareableButtonProps) => {
  const [isShared, setIsShared] = useState(false);

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      } catch (err) {
        console.error("Failed to share:", err);
      }
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setIsShared(true);
          setTimeout(() => setIsShared(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy URL: ", err);
        });
    }
  };

  return (
    <button
      onClick={handleShareClick}
      className={cn(
        `flex cursor-pointer items-center gap-2 rounded-[0.3125rem] bg-muted px-[1rem] py-[0.62rem] text-[0.875rem] font-500 text-foreground-light/85 transition-all hover:bg-primary hover:text-background xl:gap-[1rem]`,
        className,
      )}
    >
      {isShared ? "Shared!" : children || "Share"} <Share size={18} />
    </button>
  );
};

export default ShareableButton;
