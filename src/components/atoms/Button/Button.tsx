import React from 'react';
import classNames from 'classnames';

import { Alignment, Appearance, BaseProps, ButtonType, Size } from '../../common-types';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { IconProps } from '../Icon/Icon';

export interface ButtonProps extends BaseProps {
  /**
   * Type of `Button`
   */
  type?: ButtonType;
  /**
   * The size of `Button`
   * @default "regular"
   */
  size?: Size;
  /**
   * Color of the `Button`
   * @default "basic"
   */
  appearance?: Appearance;
  /**
   * Selected state of `Button`
   *
   * **Only applicable for `appearance: 'basic' | 'transparent'`**
   */
  selected?: boolean;
  /**
   * Disables the `Button`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Expands the `Button` to full width
   */
  expanded?: boolean;
  /**
   * Adds loader inside `Button` when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Name of icon that is to be added inside `Button`
   * Material icon name
   */
  icon?: string;
  /**
   * Align icon left or right
   * @default "left"
   */
  iconAlign?: Alignment;
  /**
   * Determines if size of icon is large
   *
   * **Valid when button has icon only**
   */
  largeIcon?: boolean;
  /**
   * Text to be added inside `Button`
   */
  children?: React.ReactText | React.ReactNode;
  /**
   * Specifies tab index of `Button`
   * @default 0
   */
  tabIndex?: number;
  /**
   * Specifies autoFocus on render
   */
  autoFocus?: boolean;
  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `Button`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Button`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Specifies whether the button is outlined or not
   */
  outlined?: boolean;
  radius?: 'rounded' | 'square' | 'pill';
  noHovering?: boolean;
  defaultText?: boolean;
  iconProps?: IconProps;
}

const sizeMapping: Record<Size, number> = {
  tiny: 12,
  regular: 16,
  large: 20,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type,
    icon,
    size = 'regular',
    tabIndex = 0,
    appearance = 'basic',
    disabled = false,
    className,
    loading = false,
    iconAlign = 'left',
    largeIcon,
    children,
    expanded,
    noHovering,
    selected,
    radius = 'rounded',
    outlined = false,
    defaultText,
    iconProps = {},
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const buttonClasses = classNames(
    'flex flex-row justify-center box-border relative cursor-pointer select-none align-middle border-0 py-2 text-center font-normal',
    {
      'flex-row-reverse': iconAlign === 'right',
      border: appearance !== 'transparent',
      [`bg-${appearance}`]: !loading && !disabled && !outlined && !!appearance,
      [`border-${appearance}`]: !loading && !disabled && !outlined && !!appearance,
      [`border-${appearance}`]: !loading && !disabled && outlined && !!appearance,
      [`bg-${appearance}-disabled`]: loading || disabled,
      [`border-${appearance}-disabled`]: loading || disabled,
      [`bg-transparent`]: !loading && !disabled && outlined,
      [`hover:bg-basic`]: !loading && !disabled && !noHovering && appearance === 'transparent',
      [`text-disabled`]: loading || disabled,
      [`rounded`]: radius === 'rounded',
      [`rounded-none`]: radius === 'square',
      [`rounded-lg`]: radius === 'pill',
      'text-white': appearance !== 'basic' && appearance !== 'transparent' && !outlined,
      [`text-${appearance}`]: !loading && !disabled && !defaultText && outlined && appearance,
      'w-full': expanded,
      'h-7 px-2 text-sm leading-2': size === 'tiny',
      'h-9 px-3 text-base leading-4': size === 'regular',
      'h-13 px-5 text-lg leading-7': size === 'large',
      'cursor-not-allowed': loading || disabled,
    },
    className
  );

  const iconClass = classNames({
    ['h-full']: true,
    [`mr-2`]: iconAlign === 'left' && children && size !== 'tiny',
    [`ml-2`]: iconAlign === 'right' && children && size !== 'tiny',
    [`mr-1`]: iconAlign === 'left' && children && size === 'tiny',
    [`ml-1`]: iconAlign === 'right' && children && size === 'tiny',
  });

  return (
    <button
      ref={ref}
      type={type}
      tabIndex={tabIndex}
      style={{
        transition:
          'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={buttonClasses}
      disabled={loading || disabled}
    >
      {loading ? (
        <>
          <Spinner size="small" className={size === 'large' && children ? 'mr-1' : ''} appearance="white" />
          {children}
        </>
      ) : (
        <>
          {icon && (
            <div className={iconClass}>
              <Icon
                name={icon}
                appearance={
                  disabled
                    ? 'disabled'
                    : appearance === 'basic' || appearance === 'transparent'
                    ? selected
                      ? 'info'
                      : 'default'
                    : 'white'
                }
                size={largeIcon && !children ? sizeMapping[size] + 4 : sizeMapping[size]}
                className={
                  size === 'large'
                    ? 'leading-7'
                    : size === 'tiny'
                    ? 'leading-2'
                    : children
                    ? 'leading-4'
                    : 'leading-5'
                }
                {...iconProps}
              />
            </div>
          )}
          {children}
        </>
      )}
    </button>
  );
});

export default Button;
