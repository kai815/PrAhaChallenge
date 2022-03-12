import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      grey800:"rgba(31, 41, 55,1)"
    },
    fontSizes: {
      // https://tailwindcss.com/docs/font-sizeに倣う
      xs:'0.75rem', /* 12px */
      sm:"0.875rem", /* 14px */
      base:"1rem", /* 16px */
      lg:"1.125rem", /* 18px */
      xl: "1.25rem", /* 20px */
      xl2: "1.5rem", /* 24px */
    },
    lineHeights:{
      xs:'1rem', /* 16px */
      sm:"1.25rem", /* 20px */
      base:"1.5rem", /* 24px */
      lg:"1.75rem", /* 28px */
      xl:"1.75rem", /* 28px */
      xl2: "2rem", /* 32px */
    },
    fontWeights:{
      //https://tailwindcss.com/docs/font-weight
      thin:100,
      extralight: 200,
      light:300,
      normal:400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    } 
  },
});
