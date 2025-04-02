// /lib/firebase/auth.ts
"use client"; // Only if this code is used on the client side (Next.js App Router)

import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebaseApp";
import { globalErrorHandler } from "@/helpers/globalResponseHandler";
import { socialLogin } from "@/services/auth/authServices";

// Google Sign In
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    const payload = {
      provider_name: "google",
      email: user.email,
      name: user.displayName,
      access_token: accessToken,
    };

    const response = await socialLogin(payload);
    return response;
  } catch (error) {
    globalErrorHandler(error);
  }
};

// Apple Sign In
export const signInWithApple = async () => {
  const provider = new OAuthProvider("apple.com");
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    const payload = {
      provider_name: "apple",
      email: user.email,
      name: user.displayName,
      access_token: accessToken,
    };

    const response = await socialLogin(payload);
    return response;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
};
