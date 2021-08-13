import * as React from 'react';
import classNames from 'classnames';

export type Appearance =
  | 'default'
  | 'warning-disabled'
  | 'warning'
  | 'warning-dark'
  | 'basic-disabled'
  | 'basic'
  | 'basic-dark'
  | 'info-dark'
  | 'info'
  | 'info-disabled'
  | 'primary-disabled'
  | 'primary'
  | 'primary-dark'
  | 'success-disabled'
  | 'success'
  | 'success-dark'
  | 'subtle-disabled'
  | 'subtle'
  | 'subtle-dark'
  | 'destructive-disabled'
  | 'destructive'
  | 'destructive-dark'
  | 'disabled'
  | 'white';
export type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp'; // 'outline', 'rounded' to be deprecated soon.

export interface IconProps {
  className?: string;
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Size of `Icon`
   */
  size: number;
  /**
   * Type of material `Icon`
   *
   * ** `'outline' | 'rounded'` will be deprecated**
   */
  type?: IconType;
  /**
   * Color of `Icon`    // 'info' appearance will be deprecated soon.
   */
  appearance?: Appearance;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * DOM node to be passed as child to the component
   */
  children?: React.ReactNode;
}

export const Icon = (props: IconProps) => {
  const { appearance, className, name, size, onClick, children } = props;

  const mapper = (val: IconProps['type']) => {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  const type = mapper(props.type);

  const iconClass = classNames({
    ['material-icons flex-shrink-0 overflow-hidden select-none']: true,
    [`material-icons-${mapper(type)}`]: type && type !== 'filled',
    [`text--${appearance}`]: appearance,
    [`${className}`]: className,
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  // change `children` to {name} after migration
  if (children && React.isValidElement(children)) {
    return <span className={className}>{children}</span>;
  }
  return (
    <i className={iconClass} style={styles} onClick={onClick}>
      {type ? `${name}_${type}` : name}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
  type: 'filled',
};

export default Icon;
