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
import { FirebaseError } from "firebase/app";

// Google Sign In
export const signInWithGoogle = async ({
  isAffiliate,
}: {
  isAffiliate?: boolean;
}) => {
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
      is_affiliate: isAffiliate ? 1 : null,
    };

    const response = await socialLogin(payload);
    return response;
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/popup-closed-by-user") {
        return;
      }
    }
    throw new Error(globalErrorHandler(error));
  }
};

// Apple Sign In
export const signInWithApple = async ({
  isAffiliate,
}: {
  isAffiliate?: boolean;
}) => {
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
      is_affiliate: isAffiliate ? 1 : null,
    };

    const response = await socialLogin(payload);
    return response;
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/popup-closed-by-user") {
        return;
      }
    }
    throw new Error(globalErrorHandler(error));
  }
};
