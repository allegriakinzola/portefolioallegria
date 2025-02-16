import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}", // Ajout de `sections`
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: "var(--font-roboto), sans-serif",
        poppins: "var(--font-poppins), sans-serif",
        montserrat: "var(--font-montserrat), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
