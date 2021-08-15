import * as React from 'react';
import NextLink from 'next/link';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from 'src/components/common-types';

type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type Appearance = 'default' | 'subtle' | 'primary';
type Size = 'base' | 'sm' | 'lg';

export interface LinkProps extends BaseProps, BaseHtmlProps<HTMLLinkElement> {
  /**
   * HTML ID of `Link`
   */
  id?: string;
  /**
   * Color of `Link`
   */
  appearance: Appearance;
  /**
   * Size of `Link`
   */
  size: Size;
  /**
   * Disables the `Link`, making it unable to be clicked
   */
  disabled: boolean;
  /**
   * The URL to navigate to when the `Link` is clicked
   */
  href: string;
  /**
   * Specifies where to open the navigated document
   */
  target?: LinkTarget;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: string;
  /**
   * Hints at the human language of the linked URL
   */
  hreflang?: string;
  /**
   * Element to be rendered
   */
  children: React.ReactNode;

  decorated?: boolean;
}

const sizeMapping = {
  sm: 'base',
  base: 'lg',
  lg: 'xl',
};

export const Link = (props: LinkProps) => {
  const { children, className, appearance, size, href, disabled, decorated = true, ...rest } = props;

  const classes = classNames(
    {
      'font-normal relative cursor-pointer': true,
      ['hover:font-medium hover:underline hover:text-info']: !disabled && decorated,
      [`text-${appearance}`]: !disabled && appearance,
      [`text-disabled`]: disabled,
      [`text-${sizeMapping[size]}`]: sizeMapping[size],
      'cursor-not-allowed': disabled,
    },
    className
  );

  return (
    <NextLink href={href}>
      <GenericText className={classes} componentType="a" {...rest}>
        {children}
      </GenericText>
    </NextLink>
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false,
};

export default Link;
