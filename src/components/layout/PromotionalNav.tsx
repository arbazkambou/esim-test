"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setShowPromoBanner } from "@/redux/slices/promoBannerSlice";
import { X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

function PromotionalNav() {
  const showPromoBanner = useAppSelector(
    (state) => state.promoBanner.showPromoBanner,
  );

  const [showNav, setShowNav] = useState(false);

  const pathname = usePathname();

  const dispatch = useAppDispatch();

  useEffect(
    function () {
      if (showPromoBanner) {
        const timer = setTimeout(() => setShowNav(true), 5000);

        return () => clearTimeout(timer);
      }
    },
    [showPromoBanner, pathname],
  );

  useEffect(() => {
    dispatch(setShowPromoBanner(false));
    setShowNav(false);
  }, [pathname, dispatch]);

  return (
    <AnimatePresence>
      {showPromoBanner && showNav && (
        <motion.section
          className="sticky left-0 top-0 z-50 bg-primary"
          key="promo-banner"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="container relative flex flex-wrap items-center justify-center gap-4 py-4 text-[14px] sm:py-[14px] sm:text-[17px]">
            <div className="flex items-center justify-center gap-4">
              <p className="font-500 text-background">
                Get 10% of discount using the code
              </p>
              <p className="rounded-[99px] border border-dashed px-[20px] py-[4px] text-[24px] font-500 text-background">
                ESIM10
              </p>
            </div>

            <Link
              className="flex w-full items-center justify-center rounded-[99px] border bg-background px-[20px] py-[7px] text-[14px] font-500 transition-all hover:scale-105 md:w-auto"
              href={"/esim"}
            >
              Buy my eSIM
            </Link>

            <X
              className="absolute right-[1%] top-[2%] h-[20px] w-[20px] transform text-background transition-all hover:scale-125 sm:right-0 sm:top-[19%] md:top-1/2 md:-translate-y-1/2"
              onClick={() => setShowNav(false)}
            />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default PromotionalNav;
