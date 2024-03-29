import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      white: 'rgba(255, 255, 255, 1)',
      grey100: 'rgba(243, 244, 246, 1)',
      grey300: 'rgba(209, 213, 219, 1)',
      grey500: 'rgba(107, 114, 128, 1)',
      grey600: 'rgba(75, 85, 99, 1)',
      grey700: 'rgba(55, 65, 81, 1)',
      grey800: 'rgba(31, 41, 55, 1)',
      green100: 'rgba(209, 250, 229, 1)',
    },
    fontSizes: {
      // https://tailwindcss.com/docs/font-sizeに倣う
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      lg: '1.125rem' /* 18px */,
      xl: '1.25rem' /* 20px */,
      xl2: '1.5rem' /* 24px */,
    },
    lineHeights: {
      xs: '1rem' /* 16px */,
      sm: '1.25rem' /* 20px */,
      base: '1.5rem' /* 24px */,
      lg: '1.75rem' /* 28px */,
      xl: '1.75rem' /* 28px */,
      xl2: '2rem' /* 32px */,
    },
    fontWeights: {
      //https://tailwindcss.com/docs/font-weight
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    shadows: {
      //https://tailwindcss.jp/docs/box-shadow
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
    },
  },
  media: {
    //sp版
    sm: '(max-width: 640px)',
  },
});
