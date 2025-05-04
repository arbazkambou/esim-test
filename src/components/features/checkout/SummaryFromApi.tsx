import { PromoCodeResponse } from "@/types/purchase/ApplyPromoCode";
import OrderItem from "./OrderItem";

function SummaryFromApi({
  checkoutSummary,
}: {
  checkoutSummary: PromoCodeResponse;
}) {
  const { from_wallet, from_card } = checkoutSummary;
  return (
    from_wallet !== 0 &&
    from_card !== 0 && (
      <>
        <OrderItem className="mx-2 border border-primary/30 bg-background py-1 text-base font-500">
          <p>Pay From Wallet</p>
          <p>${from_wallet?.toFixed(2)}</p>
        </OrderItem>

        <OrderItem className="bg-primary/ mx-2 border border-primary/30 bg-background py-1 text-base font-500">
          <p>To Pay on Checkout</p>
          <p>${from_card?.toFixed(2)}</p>
        </OrderItem>
      </>
    )
  );
}

export default SummaryFromApi;
