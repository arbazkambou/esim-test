import * as Sentry from "@sentry/nextjs";

const APP_ENV = process.env.NEXT_PUBLIC_ENV;
const DSN = process.env.NEXT_PUBLIC_BASE_SENTRY_DSN;

Sentry.init({
  dsn: DSN,
  debug: false,
  enabled: APP_ENV === "production" && !!DSN,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
