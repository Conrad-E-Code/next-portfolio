/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
         primaryColor: "#007BFF",
         secondaryColor: "#6C757D",
         backgroundColor: "#F8F9FA",
         textColorDark: "#343A40",
         textColorLight: "#FFFFFF",
         errorColor: "#DC3545",
         successColor: "#28A745",
         warningColor: "#FFC107",
         accentColor: "#FF6B6B",
         accentColorB: "#17C3B2",
         chatHeaderColor: "rgb(52,53,65)",
         chatBackgroundColor: "rgb(68,70,84)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
