import FloatingBottomNav from "@/components/layout/FloatingBottomNav";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PromotionalNav from "@/components/layout/PromotionalNav";
import GTMWrapper from "@/components/my-ui/shared/GTMWrapper";
import { RouteChangeListener } from "@/components/my-ui/shared/RouteChangeListner";
import AuthProvider from "@/providers/AuthProvider";
import { PromoCodeProvider } from "@/providers/PromoCodeProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import type { Viewport } from "next";
import { Montserrat, Poppins, Work_Sans } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import FloatingWhatsApp from "@/components/my-ui/shared/FloatingWhatsapp";
import TawkScript from "@/components/my-ui/shared/TawkScript";

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#008E7C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${montserrat.variable} ${poppins.variable}`}
      prefix="og: https://ogp.me/ns#"
    >
      <head>
        {/* Trustpilot Script */}
        <Script
          strategy="afterInteractive"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />
      </head>
      <body className="relative bg-background font-sans text-lg font-400">
        <GTMWrapper />
        <NextTopLoader
          showSpinner={false}
          color="hsla(var(--primary))"
          zIndex={110}
          initialPosition={0.08}
          height={3}
          easing="ease"
          speed={400}
          shadow="0 0 10px hsla(var(--primary)), 0 0 5px hsla(var(--primary))"
        />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: { fontSize: "14px" },
          }}
        />
        <ReactQueryProvider>
          <PromoCodeProvider>
            <AuthProvider>
              <ReduxProvider>
                <RouteChangeListener />
                <PromotionalNav />
                <Navbar />

                {children}

                <Footer />
                <FloatingBottomNav />
              </ReduxProvider>
            </AuthProvider>
          </PromoCodeProvider>
        </ReactQueryProvider>
        <TawkScript />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
