import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
    },
    fontSize: {
      // https://tailwindcss.com/docs/font-sizeに倣う
      xs:'0.75rem', /* 12px */
      sm:"0.875rem", /* 14px */
      base:"1rem", /* 16px */
      lg:"1.25rem", /* 18px */
    },
    lineHeight:{
      xs:'1rem', /* 16px */
      sm:"1.25rem", /* 20px */
      base:"1.5rem", /* 24px */
      lg:"1.75rem", /* 28px */
    } 
  },
});
