import { styled } from '../../../../stitches.config';
import React, { ReactNode } from 'react';

type PropsType = {
  color?: 'red' | 'blue' | 'green';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
// & React.ComponentProps<'button'>;

const BaseButton = styled('button', {
  color:'white',
  variants: {
    color: {
      red: {
        background: 'red',
      },
      blue: {
        background: 'blue',
      },
      green: {
        background: 'green',
      },
    },
    size: {
      small: {
        width: '50px',
        height: '30px',
      },
      medium: {
        width: '100px',
        height: '60px',
      },
      large: {
        width: '150px',
        height: '90px',
      },
    },
  },
});

const Button = (props: PropsType) => {
  const { size = 'medium', color = 'blue', children, disabled, onClick } = props;
  return (
    <BaseButton size={size} color={color} disabled={disabled} onClick={onClick}>
      {children}
    </BaseButton>
  );
};
export default Button;
