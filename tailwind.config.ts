import type { Config } from "tailwindcss";

/* eslint-disable @typescript-eslint/no-require-imports */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsla(var(--background))",
        foreground: {
          DEFAULT: "hsla(var(--foreground))",
          light: "hsla(var(--foreground-light))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          light: "hsla(var(--primary-light))",
          gradeint: "hsla(var(--primary-gradeint))",
          DEFAULT: "hsla(var(--primary))",
          accent: "hsla(var(--primary-accent))",
          foreground: "hsla(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          foreground: "hsla(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsla(var(--muted))",
          foreground: "hsla(var(--muted-foreground))",
        },
        info: {
          DEFAULT: "hsla(var(--info))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive))",
          foreground: "hsla(var(--destructive-foreground))",
        },
        grey: {
          DEFAULT: "var(--grey)",
        },

        bottomNav: {
          DEFAULT: "hsla(var(bottom-nav-background))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #008E7C 0%, #002823 100%)",
        "image-overlay":
          "linear-gradient(101deg, rgba(0, 0, 0, 0.5) 0.87%, rgba(0, 0, 0, 0) 100%)",
        "image-overlay-light":
          "linear-gradient(324deg, rgba(0, 0, 0, 0.50) 20.61%, rgba(0, 0, 0, 0.00) 78.89%)",
        "country-image-overlay":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.48%, #000 100%)",
      },
      borderRadius: {
        sm: "0.75rem",
        md: "0.95rem",
        lg: "1rem",
        pill: "6.19rem",
      },
      boxShadow: {
        custom: "0px 5px 35px 0px rgba(30, 34, 40, 0.05)",
        myCard: "0px 5px 35px 0px rgba(30, 34, 40, 0.07)",
        bottomNav:
          " 0 8px 32px rgba(0, 0, 0, 0.08),0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      fontSize: {
        "2xl": ["1.375rem", "1.75rem"],
        "3xl": ["1.75rem", "1"],
        "4xl": ["2.375rem", "1"],
        "5xl": ["2.98625rem", "1"],
        "6xl": ["3.58125rem", "1"],
        "h1-base": ["1.375rem", "1"],
        "h1-md": ["2.3125rem", "1"],
        "h1-xl": ["3.5625rem", "1"],
        "h2-base": ["1.375rem", "1"],
        "h2-md": ["2rem", "1"],
        "h2-xl": ["2.9375rem", "1"],
        "body-base": ["1rem", "1.5rem"],
        "body-sm": ["0.875rem", "1.5"],
        "body-md": ["1.125rem", "1.6"],
        "body-lg": ["1.375rem", "1.6"],
      },
      fontWeight: {
        // "100": "100",
        // "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        // "800": "800",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          sm: "0px",
        },
      },
      screens: {
        xs: "400px",
        xxl: "1400px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
export default config;
