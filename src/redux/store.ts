import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { promoReducer } from "./slices/promoBannerSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    promoBanner: promoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisPatch = typeof store.dispatch;
