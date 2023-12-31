import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "tabAndUp": "34.375rem", // 550px
      "laptopAndUp": "68.75rem", // 1100px
    },
    extend: {
      animation: {
        wave: "wave 1s ease-in-out infinite alternate"
      },
      keyframes: {
          wave: {
            "0%": {
              transform: "rotate(0turn)"
            },
            "100%": {
              transform: "rotate(0.05turn)"
            }
          }
      },
      padding: {
        "8px": "8px",
        "16px": "16px",
        "24px": "24px",
        "32px": "32px",
        "40px": "40px",
        "48px": "48px",
        "56px": "56px",
        "64px": "64px",
        "72px": "72px",
        "80px": "80px",
        "88px": "88px",
        "96px": "96px"
      },
      width: {
        "8px": "8px",
        "16px": "16px",
        "24px": "24px",
        "32px": "32px",
        "40px": "40px",
        "48px": "48px"
      },
      height: {
        "8px": "8px",
        "16px": "16px",
        "24px": "24px",
        "32px": "32px",
        "40px": "40px",
        "48px": "48px"
      },
      colors: {
        "goshawk-grey": "#444444",
        "charmed-chalice": "#A1A1A1",
        "carbon": "#333",
        "plaster": "#EAEAEA",
        "argent": "#888888",
        "disco-ball": "#D4D4D4",
        "young-night": "#232323",
        "white-edgar": "#EDEDED",
        "squant": "#666666",
        "cynical-black": "#171717",
        "white-as-heaven": "#FEFEFE",
        "dynamic-black": "#1D1D1D",
        "old-silver": "#838383",
        
        
        /*
        "stonewall-gray": "#C1C1C1",
        "beluga": "#F1F1F1",
        "namara-gray": "#7B7B7B",
        "black-panther": "#424242"
        */
      }
    }
  },
  plugins: []
}
export default config
