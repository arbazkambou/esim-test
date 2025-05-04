export {};

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, flag: boolean) => void;
    };
  }
}
