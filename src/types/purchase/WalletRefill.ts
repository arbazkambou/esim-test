export interface WalletRefill {
  status: boolean;
  message: string;
  data: {
    verified: boolean;
    stripe_customer_id: string;
    payment_gateway: string;
    stripe_checkout_url: string;
  };
}

export interface WalletRefillInputs {
  amount: string;
  landing_redirect_url: string;
}

export interface WalletRefresh {
  status: boolean;
  message: string;
  data: {
    balance: number;
  };
}
