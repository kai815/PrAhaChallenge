import { ReactNode } from 'react';
import { styled } from '../../../../stitches.config';

type PropsType = {
  className?: string;
  children: ReactNode;
  paddingXSize: 's' | 'm' | 'l';
  paddingYSize: 's' | 'm';
  maxWidth: 's' | 'm';
  flexDirection?: 'column';
};

const OutLine = styled('div', {
  backgroundColor: '$white',
  borderRadius: '0.5rem',
  boxShadow: '$md',
  variants: {
    paddingXSize: {
      s: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
      m: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
      l: {
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
      },
    },
    paddingYSize: {
      s: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
      },
      m: {
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
      },
    },
    maxWidth: {
      s: {
        maxWidth: '24rem',
      },
      m: {
        maxWidth: '56rem',
      },
    },
    flexDirection: {
      column: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});

const CardOutLine = ({
  paddingXSize,
  paddingYSize,
  maxWidth,
  flexDirection = undefined,
  className = '',
  children,
}: PropsType) => {
  return (
    <OutLine
      className={className}
      paddingXSize={paddingXSize}
      paddingYSize={paddingYSize}
      maxWidth={maxWidth}
      flexDirection={flexDirection}
    >
      {children}
    </OutLine>
  );
};

export default CardOutLine;
