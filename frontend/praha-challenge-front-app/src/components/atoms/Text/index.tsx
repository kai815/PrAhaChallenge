import { styled } from '../../../../stitches.config';

const Text = styled('p', {
  fontFamily: '$system',
  variants: {
    color:{
      grey100: {
        color:'$grey100'
      },
      grey500: {
        color:'$grey500'
      },
      grey600: {
        color:'$grey600'
      },
      grey800: {
        color:'$grey800'
      },
    },
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
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      xl2: {
        fontSize: '$xl2',
        lineHeight: '$xl2',
      },
    },
    weight: {
      thin:{
        fontWeight: '$thin'
      },
      extralight:{
        fontWeight: '$extralight'
      },
      light:{
        fontWeight: '$light'
      },
      normal:{
        fontWeight: '$normal'
      },
      medium:{
        fontWeight: '$medium'
      },
      semibold:{
        fontWeight: '$semibold'
      },
      bold:{
        fontWeight: '$bold'
      },
      extrabold:{
        fontWeight: '$extrabold'
      },
    }
  },
});

export default Text;
