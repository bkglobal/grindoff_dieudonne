import * as React from 'react';
import classNames from 'classnames';

import GenericText from '../_text';
import { BaseHtmlProps, BaseProps } from 'src/components/common-types';

export type Appearance = 'default' | 'inherit' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Color of `Paragraph`
   */
  appearance: Appearance;
}

export const Paragraph = (props: ParagraphProps) => {
  const { appearance, children, className, ...rest } = props;

  const classes = classNames(
    {
      [`text-lg`]: true,
      [`text-${appearance}`]: appearance,
    },
    className
  );

  return (
    <GenericText {...rest} className={classes} componentType="p">
      {children}
    </GenericText>
  );
};

Paragraph.displayName = 'Paragraph';
Paragraph.defaultProps = {
  appearance: 'default',
};

export default Paragraph;
