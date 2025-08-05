export {};

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, flag: boolean) => void;
    };
    gapi: {
      load: (lib: string, callback: () => void) => void;
      surveyoptin: {
        render: (options: {
          merchant_id: number;
          order_id: string;
          email: string;
          delivery_country: string;
          estimated_delivery_date: string;
          products?: Array<{ gtin: string }>;
        }) => void;
      };
    };
    renderOptIn: () => void;
  }
}
