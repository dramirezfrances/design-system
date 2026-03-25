import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Brand ─────────────────────────────────────
        brand: {
          DEFAULT: "#0b49ea",
          hover:   "#0f3db5",
          active:  "#082485",
        },
        // ── Neutrals ──────────────────────────────────
        neutral: {
          50:  "#f2f4f5",
          100: "#e4e8ea",
          200: "#d0d5d9",
          300: "#e9ecee",
          500: "#656c70",
          700: "#3d4347",
          900: "#1c1f22",
        },
        // ── Semantic status ───────────────────────────
        success: {
          bg:     "#E8F5ED",
          text:   "#1E8B3D",
          border: "#1E8B3D",
        },
        warning: {
          bg:     "#FEF6E7",
          text:   "#B87A00",
          border: "#F5A623",
        },
        error: {
          bg:     "#FCEBED",
          text:   "#D0021B",
          border: "#D0021B",
        },
        info: {
          bg:     "#E5F1FC",
          text:   "#0072CE",
          border: "#0072CE",
        },
        // ── Extended palette ──────────────────────────
        navy:   { DEFAULT: "#003057" },
        orange: { DEFAULT: "#E8612C" },
        teal:   { DEFAULT: "#00A3A1" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.08)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
