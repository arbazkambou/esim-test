"use client";

import japan from "@/_assets/flags/japan.svg";
import russia from "@/_assets/flags/russia.svg";
import spain from "@/_assets/flags/spain.svg";
import turkey from "@/_assets/flags/turkey.svg";
import uae from "@/_assets/flags/uae.svg";
import uk from "@/_assets/flags/uk.svg";
import usa from "@/_assets/flags/usa.svg";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FlagHoverComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const countryFlags = [
    { imgSrc: usa, name: "USA", href: "/esim/united-states" },
    { imgSrc: uk, name: "UK", href: "/esim/united-kingdom" },
    { imgSrc: japan, name: "Japan", href: "/esim/japan" },
    { imgSrc: uae, name: "UAE", href: "/esim/united-arab-emirates" },
    { imgSrc: turkey, name: "Turkey", href: "/esim/turkey" },
    { imgSrc: spain, name: "Spain", href: "/esim/spain" },
    { imgSrc: russia, name: "Russia", href: "/esim/russia" },
  ];

  return (
    <div className="ms-2 flex w-auto md:ms-0">
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
            <motion.span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.name}
            </motion.span>

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
