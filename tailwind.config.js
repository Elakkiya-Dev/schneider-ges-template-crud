/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        schneider: {
          DEFAULT: '#3DCD58',
          dark: '#2fae47',
          darker: '#1f8a35',
          light: '#eafaef',
          50: '#f0fdf3',
          100: '#dcfce4',
          200: '#bbf7ca',
          300: '#86eda3',
          400: '#4ade73',
          500: '#3DCD58',
          600: '#22a83f',
          700: '#1d8534',
          800: '#1c692e',
          900: '#195628',
        },
        status: {
          green: '#22c55e',
          blue: '#3b82f6',
          amber: '#f59e0b',
        },
        ink: '#1f2937',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
