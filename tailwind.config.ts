import { Config } from "tailwindcss";

import tailwindForms from "@tailwindcss/forms";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCB47",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"],
      },
      boxShadow: {
        newsletter: "10px 10px 30px rgba(0, 0, 0, 0.06)",
        button: "10px 10px 30px rgba(255, 203, 71, 0.3)",
        card: '10px 10px 30px rgba(0, 0, 0, 0.06)',
        product: "10px 10px 30px rgba(0, 0, 0, 0.06)"
      },
    },
  },
  plugins: [tailwindForms()],
} satisfies Config;
