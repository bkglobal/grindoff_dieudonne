import * as React from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

export type Appearance = 'primary' | 'secondary' | 'white';
export type Size = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  /**
   * Color of `Spinner`
   */
  appearance?: Appearance;
  /**
   * Size of `Spinner`
   */
  size?: Size;

  className?: string;
}

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const StyledSpinner = styled.span<{ dimension: string; color: string }>`
  &::before {
    content: '';
    -webkit-transform-origin: center;
    animation: ${rotate} 500ms infinite linear;
    border-radius: 50%;
    border: 0.1rem solid ${(p) => p.color};
    color: ${(p) => p.color};
    border-right-color: transparent;
    border-top-color: transparent;
    width: ${(p) => p.dimension};
    height: ${(p) => p.dimension};
    content: '';
    display: inline-block;
    transform-origin: center;
  }
`;

const Spinner = (props: SpinnerProps) => {
  const { appearance, size, className } = props;
  const wrapperClasses = classNames(className, {
    'h-4 w-4': size === 'small',
    'h-5 w-5': size === 'medium',
    'h-8 w-8': size === 'large',
    // [`border-${appearance}`]: appearance,
  });

  let dimension: string = '',
    color: string = '';
  switch (size) {
    case 'small':
      dimension = '0.8rem';
      break;
    case 'medium':
      dimension = '1.4rem';
      break;
    case 'large':
      dimension = '2rem';
      break;
    default:
      break;
  }
  switch (appearance) {
    case 'primary':
      color = '#14A800';
      break;
    case 'secondary':
      color = '#FE0C0C';
      break;
    case 'white':
      color = '#fff';
      break;
    default:
      break;
  }

  return <StyledSpinner dimension={dimension} color={color} className={wrapperClasses} />;
};

Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'small',
};

export default Spinner;
