import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'balloon-text-color': '#fff',
        'bg-color': '#323437',
        'caret-color': '#e2b714',
        'colorful-error-color': '#ca4754',
        'colorful-error-extra-color': '#7e2a33',
        'error-color': '#ca4754',
        'error-extra-color': '#7e2a33',
        'main-color': '#e2b714',
        'sub-alt-color': '#2c2e31',
        'sub-color': '#646669',
        'text-color': '#d1d0c5',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
export default config;
