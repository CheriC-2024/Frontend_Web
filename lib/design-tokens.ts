// Color Tokens
export const colors = {
  primary: {
    DEFAULT: '#E52C32',
    50: '#FCEBEB',
    100: '#FFE3E4',
    300: '#FFC3C5',
    500: '#EF696D',
    700: '#EA464B',
    900: '#E52C32', // Default primary color
  },

  neutral: {
    white: '#FCFCFC',
    black: '#120000',
    gray: {
      100: '#FCF9F9',
      300: '#F7F5F5',
      500: '#B0ABAB',
      700: '#413333',
    },
  },

  primaryTrans: {
    100: '#FCEAEB',
    200: '#FAD5D6',
    400: '#F5ABAD',
    500: '#F29598',
    800: '#EA565B',
  },

  grayTrans: {
    100: '#E7E5E5',
    200: '#D0CCCC',
    400: '#A09999',
    500: '#888080',
    800: '#413333',
  },
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    primary: 'Pretendard',
    blackhan: 'BlackHanSans-Regular',
    dacapo: 'MapoDacapo',
    snowfrost: 'SnowFrost',
    santokki: 'SanTokki',
    lotteria: 'Lotteria',
    ryu: 'OnGeurLip-Ryu',
  },

  fontSize: {
    12: ['0.75rem', { lineHeight: '1rem' }], // 12px / 16px
    14: ['0.875rem', { lineHeight: '1.25rem' }], // 14px / 20px
    16: ['1rem', { lineHeight: '1.5rem' }], // 16px / 24px
    18: ['1.125rem', { lineHeight: '1.75rem' }], // 18px / 28px
    20: ['1.25rem', { lineHeight: '1.75rem' }], // 20px / 28px
    24: ['1.5rem', { lineHeight: '2rem' }], // 24px / 32px
    28: ['1.75rem', { lineHeight: '2.1875rem' }], // 28px / 35px
    32: ['2rem', { lineHeight: '2.5rem' }], // 32px / 40px
    36: ['2.25rem', { lineHeight: '2.75rem' }], // 36px / 44px
    40: ['2.5rem', { lineHeight: '3rem' }], // 40px / 48px
    48: ['3rem', { lineHeight: '3.5rem' }], // 48px / 56px
    60: ['3.75rem', { lineHeight: '4.5rem' }], // 60px / 72px
  },

  fontWeight: {
    regular: 500,
    bold: 700,
  },

  lineHeight: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// Spacing Tokens
export const spacing = {
  0: '0rem',
  4: '0.25rem', // 4px
  8: '0.5rem', // 8px
  12: '0.75rem', // 12px
  16: '1rem', // 16px
  20: '1.25rem', // 20px
  24: '1.5rem', // 24px
  28: '1.75rem', // 28px
  32: '2rem', // 32px
  36: '2.25rem', // 36px
  40: '2.5rem', // 40px
  44: '2.75rem', // 44px
  48: '3rem', // 48px
  80: '5rem', // 80px
  full: '9999px',
} as const;

// Z-Index Tokens
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

export const designTokens = {
  colors,
  typography,
  spacing,
  zIndex,
} as const;

export default designTokens;
