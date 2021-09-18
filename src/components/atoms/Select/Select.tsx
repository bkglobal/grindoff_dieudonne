import classNames from 'classnames';
import React from 'react';
import { BaseHtmlProps, BaseProps } from 'src/components/common-types';
import { Size } from '../Input/Input';

export type SelectProps = BaseProps &
  BaseHtmlProps<HTMLSelectElement> & {
    children: React.ReactNode;
    /**
     * Value of the `Select`
     */
    value?: string;
    /**
     * Adds default value to `Select`
     */
    defaultValue?: string;
    /**
     * Adds default checked to `Select`
     */
    defaultChecked?: boolean;
    /**
     * Size of the `Select`
     * @default "regular"
     */
    size?: Size;
    /**
     * Disables the `Select`
     */
    disabled?: boolean;
    /**
     * minimum width of `Select` component
     *
     * @default 256
     */
    minWidth?: string | number;
    /**
     * Callback function when `Select` option changes
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Shows error state in case of failed validation
     */
    error?: boolean;
    outline?: boolean;
  };

const Select = (props: SelectProps) => {
  const {
    size = 'regular',
    onChange,
    className,
    children,
    minWidth = 256,
    value,
    disabled,
    error,
    outline = true,
    readOnly,
    name,
    defaultValue,
    defaultChecked,
    ...rest
  } = props;

  const classes = classNames(
    {
      ['flex flex-grow items-center box-border rounded border px-3 bg-white relative']: true,
      // ['hover:bg-basic-lightest hover:border-basic-lightest']: true,
      ['focus-within:bg-white focus-within:border-info focus-within:shadow-spread-info']: outline,
      ['h-13 py-3']: size === 'large',
      ['h-10 py-2']: size === 'regular',
      ['h-7 py-1']: size === 'tiny',
      ['bg-basic-lightest border-basic-lightest pointer-events-none']: disabled || readOnly,
      ['bg-white border-alert']: error,
    },
    className
  );

  const selectClasses = classNames({
    ['w-full flex bg-transparent border-0 p-0 m-0 focus:outline-none']: true,
  });

  return (
    <div className={classes} style={{ minWidth }}>
      <select
        className={selectClasses}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
