import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "tabAndUp": "34.375rem", // 550px
      "laptopAndUp": "68.75rem", // 1100px
    }
  },
  plugins: [],
}
export default config
