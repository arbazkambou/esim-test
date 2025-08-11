"use client";

import FooterLink from "@/components/my-ui/links/FooterLink";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import { CheckoutProgress } from "../features/checkout/CheckoutProgress";
import { useAuth } from "@/providers/AuthProvider";
import PageLoading from "../my-ui/fallbacks/PageLoading";

function CheckoutPage() {
  const { isAuthLoading } = useAuth();
  const cartItems = useAppSelector((state) => state.cart);

  if (isAuthLoading) return <PageLoading />;

  return (
    <section suppressHydrationWarning>
      {cartItems.length > 0 ? (
        <CheckoutProgress />
      ) : (
        <div className="flex h-[70vh] items-center justify-center">
          <Card className="ms-6 mt-4 flex flex-col gap-2 rounded-pill p-5 px-10">
            <h2 className="text-lg font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-sm">
              You haven't added any eSIM packages yet. Start exploring our plans
              to get connected!
            </p>

            <FooterLink
              href={"/esim"}
              className="text-primary underline underline-offset-4"
            >
              Browse our eSIM Packages
            </FooterLink>
          </Card>
        </div>
      )}
    </section>
  );
}

export default CheckoutPage;
