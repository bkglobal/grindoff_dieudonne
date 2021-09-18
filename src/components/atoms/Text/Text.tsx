import * as React from 'react';
import classNames from 'classnames';

import GenericText from '../_text';
import { BaseHtmlProps, BaseProps } from '../../common-types';

export type Size = 'base' | 'sm' | 'xs' | 'lg' | 'xl';
export type Appearance =
  | 'default'
  | 'primary'
  | 'inherit'
  | 'white'
  | 'destructive'
  | 'subtle'
  | 'disabled'
  | 'success'
  | 'link';

export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText | React.ReactNode;
  /**
   * Denotes weight of `Text`
   */
  weight?: 'bold' | 'normal' | 'light' | 'extralight' | 'semibold' | 'medium';
  /**
   * Color of `Text`
   */
  appearance: Appearance;
  /**
   * Size of `Text`
   */
  size: Size;
}

const sizeMapping = {
  xs: 'xs',
  sm: 'sm',
  base: 'lg',
  lg: 'xl',
  xl: '2xl',
};

export const Text = (props: TextProps) => {
  const { appearance, size, children, weight, className, ...rest } = props;

  const classes = classNames(
    {
      [`text-${appearance}`]: appearance,
      [`font-${weight}`]: weight,
      [`text-${sizeMapping[size]}`]: sizeMapping[size],
    },
    className
  );

  return (
    <GenericText {...rest} className={classes} componentType="span">
      {children}
    </GenericText>
  );
};

Text.displayName = 'Text';
Text.defaultProps = {
  appearance: 'default',
  size: 'base',
};

export default Text;
