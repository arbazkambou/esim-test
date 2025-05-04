import axios, { AxiosResponse } from "axios";
import { FirebaseError } from "firebase/app";

export function globalResponseHanlder(response: AxiosResponse): string {
  if (response.data.errors) {
    return response.data.errors[0];
  } else if (response.data.message) {
    return response.data.message;
  } else {
    return "Something went wrong!";
  }
}

export function globalErrorHandler(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      return "not found";
    }
    return (
      error.response?.data?.errors[0] ||
      error.response?.data?.message ||
      error.message
    );
  } else if (error instanceof FirebaseError) {
    return `Firebase error (${error.code}): ${error.message}`;
  } else if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong!";
}
