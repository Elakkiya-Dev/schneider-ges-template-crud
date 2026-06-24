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
          disabled: '#a7e3b5',
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
        subtle: '#9aa3af',
        wordmark: '#1a1a1a',
        danger: '#ef4444',
        'danger-soft': '#fee2e2',
        'edge-header': '#e6e8eb',
        'edge-card': '#e6e8eb',
        'edge-table': '#eef0f2',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        0.75: '0.1875rem', // 3px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7.5: '1.875rem', // 30px
        8.5: '2.125rem', // 34px
        18: '4.5rem', // 72px
        22.5: '5.625rem', // 90px
        45: '11.25rem', // 180px
      },
      maxWidth: {
        90: '22.5rem', // 360px
        400: '100rem', // 1600px
      },
      minWidth: {
        26: '6.5rem', // 104px
      },
      fontSize: {
        10: '0.625rem', // 10px
        11: '0.6875rem', // 11px
        12: '0.75rem', // 12px
        13: '0.8125rem', // 13px
        13.5: '0.84375rem', // 13.5px
        15: '0.9375rem', // 15px
        17: '1.0625rem', // 17px
        19: '1.1875rem', // 19px
        22: '1.375rem', // 22px
      },
      letterSpacing: {
        heading: '-0.01em',
        'heading-lg': '-0.02em',
        caps: '0.04em',
      },
      borderRadius: {
        10: '10px',
        14: '14px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(16, 24, 40, 0.06)',
        panel: '0 1px 3px rgba(16, 24, 40, 0.08)',
        btn: '0 1px 2px rgba(16, 24, 40, 0.12)',
      },
      lineHeight: {
        copy: '1.5',
        'copy-loose': '1.6',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
