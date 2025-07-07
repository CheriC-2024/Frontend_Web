import type { Config } from 'tailwindcss';
import designTokens from '@/lib/design-tokens';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: designTokens.colors,

      fontFamily: {
        primary: [designTokens.typography.fontFamily.primary, 'sans-serif'],
        blackhan: [designTokens.typography.fontFamily.blackhan, 'sans-serif'],
        dacapo: [designTokens.typography.fontFamily.dacapo, 'sans-serif'],
        snowfrost: [designTokens.typography.fontFamily.snowfrost, 'sans-serif'],
        santokki: [designTokens.typography.fontFamily.santokki, 'sans-serif'],
        lotteria: [designTokens.typography.fontFamily.lotteria, 'sans-serif'],
        ryu: [designTokens.typography.fontFamily.ryu, 'sans-serif'],
      },

      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,

      spacing: designTokens.spacing,

      borderRadius: {
        none: designTokens.spacing[0],
        xs: designTokens.spacing[4],
        sm: designTokens.spacing[8],
        md: designTokens.spacing[16],
        lg: designTokens.spacing[24],
        xl: designTokens.spacing[32],
        '2xl': designTokens.spacing[40],
        '3xl': designTokens.spacing[48],
        full: designTokens.spacing.full,
      },

      zIndex: designTokens.zIndex,
    },
  },
  plugins: [],
};
export default config;
