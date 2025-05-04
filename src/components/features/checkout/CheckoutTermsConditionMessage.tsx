import FooterLink from "@/components/my-ui/links/FooterLink";
import { PromoCodeResponse } from "@/types/purchase/ApplyPromoCode";
interface PropsType {
  checkouSummary: PromoCodeResponse;
}
function CheckoutTermsConditionMessage({ checkouSummary }: PropsType) {
  const { from_card } = checkouSummary;
  return (
    <p className="mx-2 text-xs">
      By clicking '{from_card === 0 ? "Purchase Now" : "Go to Secure Checkout"}'
      you agree to our{" "}
      <FooterLink
        href={"/terms"}
        className="inline text-primary underline underline-offset-2"
      >
        Terms of Use
      </FooterLink>{" "}
      and{" "}
      <FooterLink
        href={"/privacy-policy"}
        className="inline text-primary underline underline-offset-2"
      >
        Privacy Policy
      </FooterLink>{" "}
      {from_card !== 0 &&
        "and will be redirected to Stripe for secure payment."}
    </p>
  );
}

export default CheckoutTermsConditionMessage;
