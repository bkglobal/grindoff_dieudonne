import * as React from 'react';
import classNames from 'classnames';

import GenericText from '../_text';
import { BaseHtmlProps, BaseProps } from '../../common-types';

export type Size = 'base' | 'sm' | 'lg';
export type Appearance =
  | 'default'
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
  children: React.ReactText;
  /**
   * Denotes weight of `Text`
   */
  weight?: 'bold' | 'normal';
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
  sm: 'base',
  base: 'lg',
  lg: 'xl',
};

export const Text = (props: TextProps) => {
  const { appearance, size, children, weight, className, ...rest } = props;

  const classes = classNames(
    {
      'font-normal': true,
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
