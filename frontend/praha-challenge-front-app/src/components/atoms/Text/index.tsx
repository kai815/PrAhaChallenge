import { styled } from '../../../../stitches.config';

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight:'$xs'
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      base: {
        fontSize: '$base',
        lineHeight: '$base',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
    },
  },
});

export default Text;
