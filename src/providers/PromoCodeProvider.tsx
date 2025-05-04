"use client";

import { PromoCodeResponse } from "@/types/purchase/ApplyPromoCode";
import { createContext, useContext, useState, ReactNode } from "react";

interface PromoCodeContextType {
  promoCodeData: PromoCodeResponse | null;
  setPromoCodeData: React.Dispatch<
    React.SetStateAction<PromoCodeResponse | null>
  >;
}

const PromoCodeContext = createContext<PromoCodeContextType | undefined>(
  undefined,
);

export const PromoCodeProvider = ({ children }: { children: ReactNode }) => {
  const [promoCodeData, setPromoCodeData] = useState<PromoCodeResponse | null>(
    null,
  );

  return (
    <PromoCodeContext.Provider value={{ promoCodeData, setPromoCodeData }}>
      {children}
    </PromoCodeContext.Provider>
  );
};

export const usePromoCode = (): PromoCodeContextType => {
  const context = useContext(PromoCodeContext);
  if (!context) {
    throw new Error("usePromoCode must be used within a PromoCodeProvider");
  }
  return context;
};
