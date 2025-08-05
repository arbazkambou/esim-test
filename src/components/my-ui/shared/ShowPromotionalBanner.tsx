"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setShowPromoBanner } from "@/redux/slices/promoBannerSlice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ShowPromotionalBanner() {
  const dispatch = useAppDispatch();
  const showPromoBanner = useAppSelector(
    (state) => state.promoBanner.showPromoBanner,
  );
  const pathname = usePathname();

  useEffect(() => {
    dispatch(setShowPromoBanner(true));
  }, [dispatch, pathname, showPromoBanner]);

  return null;
}

export default ShowPromotionalBanner;
