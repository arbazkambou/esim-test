import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface promoState {
  showPromoBanner: boolean;
}

const initialState: promoState = {
  showPromoBanner: false,
};

const promoSlice = createSlice({
  initialState,
  name: "promo",
  reducers: {
    setShowPromoBanner(state, action: PayloadAction<boolean>) {
      state.showPromoBanner = action.payload;
    },
  },
});

export const { setShowPromoBanner } = promoSlice.actions;

export const promoReducer = promoSlice.reducer;
