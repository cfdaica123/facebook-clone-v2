const CONTENT_LEFT = '360px';
const CONTENT_MIDDLE = '680px';
const CONTENT_RIGHT = '360px';
const HEADER_HEIGHT = '56px';
const SIDEBAR_HEIGHT = 'calc(100vh - 56px)';
const WIDGET_HEIGHT = 'calc(100vh - 56px)';
const POST_HEIGHT = '472px';

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: '15px',
      },
      lineHeight: {
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        14: '56px',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        primary: '#1877F2',
        red: {
          DEFAULT: '#F02849',
        },
        green: {
          DEFAULT: '#45BD62',
        },
        yellow: {
          DEFAULT: '#F7B928',
        },
        black: {
          DEFAULT: '#050505',
        },
        gray: {
          DEFAULT: '#F0F2F5',
          dark: '#E4E6EB',
          darker: '#D8DADF',
          darkest: '#65676B',
          icon: '#9CA3AF',
        },
        light: {
          DEFAULT: '#fff',
          body: '#F0F2F5',
          text: '#050505',
          gray: {
            DEFAULT: '#F0F2F5',
            dark: '#E4E6EB',
            darker: '#D8DADF',
            darkest: '#65676B',
            icon: '#9CA3AF',
          },
        },
        dark: {
          DEFAULT: '#242526',
          body: '#18191A',
          text: '#E4E6EB',
          gray: {
            DEFAULT: '#3A3B3C',
            dark: '#303031',
            darker: '#4E4F50',
            darkest: '#A8ABAF',
          },
        },
      },
      zIndex: {
        1: '1',
        2: '2',
      },
      boxShadow: {
        'emoji-light': '1px 0 1px 1px #fff',
        'emoji-dark': '0.5px 0 1px 1px #3A3B3C',
      },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      4.5: '18px',
      5: '20px',
      6: '24px',
      7: '28px',
      7.5: '30px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      15: '60px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      32.5: '130px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      90: '360px',
      96: '384px',
      'content-left': CONTENT_LEFT,
      'content-middle': CONTENT_MIDDLE,
      'content-right': CONTENT_RIGHT,
      header: HEADER_HEIGHT,
      sidebar: SIDEBAR_HEIGHT,
      widget: WIDGET_HEIGHT,
      post: POST_HEIGHT,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
