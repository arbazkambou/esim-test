/* eslint-disable @typescript-eslint/no-explicit-any */

export function globalResponseHandler(data: any, statusCode: number): string {
  if (statusCode === 404) {
    return "Not found";
  }

  if (data?.errors?.length) {
    return data.errors[0];
  } else if (data?.message) {
    return data.message;
  } else {
    return "Something went wrong!";
  }
}

export function globalErrorHandler(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  // if (error instanceof FirebaseError) {
  //   return `Firebase error (${error.code}): ${error.message}`;
  // } else if (error instanceof Error) {
  //   return error.message;
  // }
  return "Something went wrong!";
}

export function globalHttpErrorHandler(response: Response) {
  return `HTTP error! Status: ${response.status}}`;
}
