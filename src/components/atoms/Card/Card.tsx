import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '../../common-types';

export type Shadow = 'none' | 'light' | 'medium' | 'dark';

export interface CardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Shadow of the `Card`
   * @default 'light'
   */
  shadow?: Shadow;
  /**
   * Radius of `Card`
   * @default 'rounded'
   */
  radius?: 'rounded' | 'square' | 'pill'
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { shadow = 'light', radius = 'rounded', children, className, ...rest } = props;

  const classes = classNames({
    shadow: shadow === 'light',
    [`shadow-md`]: shadow === 'medium',
    [`shadow-lg`]: shadow === 'dark',
    [`rounded`]: radius === 'rounded',
    [`rounded-none`]: radius === 'square',
    [`rounded-xl`]: radius === 'pill',
    [`relative overflow-hidden bg-white border border-basic ${className}`]: className,
  });

  return (
    <div ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
