import { searchResultVariants } from "@/lib/animations";
import { sendGTMEvent } from "@next/third-parties/google";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PropsType {
  index: number;
  href: string;
  image_url: string | StaticImageData;
  countryName: string;
}

function CountryItem({ index, countryName, href, image_url }: PropsType) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={index}
      variants={searchResultVariants}
      onClick={() =>
        sendGTMEvent({
          event: "search",
          search_term: countryName,
        })
      }
    >
      <Link
        className="flex justify-between rounded-full p-2 transition hover:bg-secondary"
        href={href}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-[20px] w-[30px]">
            <Image
              src={image_url}
              alt={`${countryName} Packages`}
              className="rounded object-cover shadow-lg"
              fill
            />
          </div>
          <p className="text-sm">{countryName}</p>
        </div>

        <ChevronRight size={22} />
      </Link>
    </motion.div>
  );
}

export default CountryItem;
