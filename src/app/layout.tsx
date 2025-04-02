import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Viewport } from "next";
import { Montserrat, Poppins, Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { PromoCodeProvider } from "@/providers/PromoCodeProvider";
import AnimatedLayout from "@/animations/AnimatedLayout";

const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    >
      <body className="bg-background font-sans text-lg font-400">
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
        <AuthProvider>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ReduxProvider>
                <PromoCodeProvider>
                  <Navbar />
                  <AnimatedLayout>{children}</AnimatedLayout>
                  <Footer />
                </PromoCodeProvider>
              </ReduxProvider>
            </ThemeProvider>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
