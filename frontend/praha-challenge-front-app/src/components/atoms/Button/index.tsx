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
  borderRadius: '12px',
  border: '0',
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
        padding: '3px 5px',
      },
      medium: {
        padding: '6px 10px',
      },
      large: {
        padding: '9px 15px',
      },
    },
  },
});

const Button = (props: PropsType) => {
  const { size = 'medium', color = 'blue', children, disabled = false, onClick } = props;
  return (
    <BaseButton size={size} color={color} disabled={disabled} onClick={onClick}>
      {children}
    </BaseButton>
  );
};
export default Button;
