/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        sm: "calc(var(--border-radius) / 2)",
        md: "calc(var(--border-radius) * 1.5)",
        lg: "calc(var(--border-radius) * 2)",
        xl: "calc(var(--border-radius) * 3)",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      spacing: {
        container: "clamp(1rem, 5vw, 5rem)",
      },
    },
  },
  plugins: [],
};
