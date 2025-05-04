"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type CountryFlag = {
  imgSrc: StaticImageData;
  name: string;
  href: string;
};

interface PropsType {
  countryFlags: CountryFlag[];
}

const FlagHoverComponent = ({ countryFlags }: PropsType) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <div className="flex">
      {countryFlags.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`group relative`}
          style={{ right: `${index * 7}px`, zIndex: index }}
        >
          <Link
            href={item.href}
            className="flex flex-col items-center justify-center gap-3.5"
          >
            {/* Country Name Animation */}
            <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.name}
            </span>

            {/* Flag Image Animation */}
            <motion.div
              className="relative h-10 w-10 border-foreground"
              animate={hoveredIndex === index ? { y: -10, scale: 1.1 } : {}}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              <Image
                src={item.imgSrc}
                alt={`${item.name} eSIM`}
                fill
                sizes="auto"
                priority
                quality={70}
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default FlagHoverComponent;
