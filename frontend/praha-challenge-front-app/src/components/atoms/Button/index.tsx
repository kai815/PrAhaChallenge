import { styled } from '../../../../stitches.config';
import React, { ReactNode } from 'react';
//import type * as Stitches from '@stitches/react';

type PropsType = {
  color?: 'red' | 'blue' | 'green';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
// & React.ComponentProps<'button'>
// & Stitches.ComponentProps<React.ComponentProps<'button'>>
// ここに書いてあることも試した
//https://github.com/modulz/stitches/issues/669

const BaseButton = styled('button', {
  color: 'white',
  borderRadius: '12px',
  border: '0',
  cursor: 'pointer',
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
    disabled: {
      true: {
        background: 'grey !important', //storyで切り替えてる時に色がグレーになったりならなかったりしたので追加importantつけた,
        opacity: '0.8',
        cursor: 'not-allowed;',
      },
    },
  },
});

const Button = (props: PropsType) => {
  const {
    size = 'medium',
    color = 'blue',
    children,
    disabled = false,
    onClick,
    ...restProps
  } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) {
      return;
    }
    return onClick(event);
  };
  return (
    <BaseButton size={size} color={color} disabled={disabled} onClick={handleClick} {...restProps}>
      {children}
    </BaseButton>
  );
};
export default Button;
