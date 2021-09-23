import * as React from 'react';
import classNames from 'classnames';

import GenericText from '../_text';
import { BaseHtmlProps, BaseProps } from 'src/components/common-types';

export type Size = 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type Appearance = 'default' | 'subtle' | 'disabled' | 'white' | 'primary';

export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
  /**
   * Color of `Heading`
   */
  appearance: Appearance;
  /**
   * size of `Heading`
   */
  size: Size;
}

const sizeMap = {
  lg: 'h5',
  xl: 'h5',
  '2xl': 'h4',
  '3xl': 'h3',
  '4xl': 'h2',
  '5xl': 'h1',
  '6xl': 'h1',
};

export const Heading = (props: HeadingProps) => {
  const { appearance, size, children, className, ...rest } = props;

  const classes = classNames(
    {
      'font-semibold': size !== '4xl' && size !== '5xl',
      'font-bold': size === '4xl' || size === '5xl',
      [`text-${size}`]: size,
      [`text-${appearance}`]: appearance,
    },
    className
  );

  return (
    <GenericText className={classes} componentType={sizeMap[size]} {...rest}>
      {children}
    </GenericText>
  );
};

Heading.displayName = 'Heading';
Heading.defaultProps = {
  appearance: 'default',
  size: 'lg',
};

export default Heading;
