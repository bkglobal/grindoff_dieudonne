import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from 'src/components/common-types';
import { IconProps } from '../../../index.types';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
export type AutoComplete = 'on' | 'off';
export type Size = 'tiny' | 'regular' | 'large';

export interface InputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
  /**
   * Name of the `Input`
   */
  name?: string;
  /**
   * Type of text inside `Input`
   * @default "text"
   */
  type?: InputType;
  /**
   * Value of the `Input` (Used in case of controlled `Input`)
   */
  value?: string;
  /**
   * Adds default value to `Input` (Used in case of uncontrolled `Input`)
   */
  defaultValue?: string;
  /**
   * Text to display when input is empty
   */
  placeholder?: string;
  /**
   * Size of the `Input`
   * @default "regular"
   */
  size?: Size;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Label to be displayed inside `Input`
   */
  inlineLabel?: string;
  /**
   * Disables the `Input`, making it unable to type
   */
  disabled?: boolean;
  /**
   * Shows the user that this field id required
   */
  required?: boolean;
  /**
   * Adds autoFocus
   */
  autoFocus?: boolean;
  /**
   * Specifies whether `input field should have autocomplete enabled
   */
  autoComplete?: AutoComplete;
  /**
   * Disables the `Input`, making it unable to type
   */
  readOnly?: boolean;
  /**
   * Valid for number it defines the most negative value in the range of permitted values.
   */
  min?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the maximum number of characters
   * (as UTF-16 code units) the user can enter into the field.
   */
  max?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the minimum number of characters
   * (as UTF-16 code units) the user can enter into the entry field.
   */
  minLength?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the maximum number of characters
   * (as UTF-16 code units) the user can enter into the field.
   */
  maxLength?: number;
  /**
   * The pattern attribute, when specified, is a regular expression that the input's value
   * must match in order for the value to pass constraint validation.
   */
  pattern?: string;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * minimum width of `Input` component
   *
   * **No default value for `type='number'`**
   * @default 256
   */
  minWidth?: string | number;
  /**
   * Callback function when user clicks the clear button
   */
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Callback function when `Input` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Custom Icon Component to be passed to Input to replace Clear Icon in the right
   */
  actionIcon?: React.ReactElement<IconProps>;

  outline?: boolean;
}

const sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20,
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    type = 'text',
    minWidth = type !== 'number' ? 256 : undefined,
    defaultValue,
    name,
    placeholder,
    value,
    icon,
    inlineLabel,
    required,
    error,
    onChange,
    onClick,
    onClear,
    onBlur,
    onFocus,
    actionIcon,
    className,
    autoFocus,
    disabled,
    readOnly,
    outline = true,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(
    forwardedRef,
    (): HTMLInputElement => {
      return ref.current as HTMLInputElement;
    }
  );

  React.useEffect(() => {
    if (autoFocus) ref.current?.focus({ preventScroll: true });
  }, []);

  const classes = classNames(
    {
      ['flex flex-grow items-center box-border rounded border px-3 bg-white']: true,
      // ['hover:bg-basic-lightest hover:border-basic-lightest']: true,
      ['focus-within:bg-white focus-within:border-info focus-within:shadow-spread-info']: outline,
      ['h-12 py-3']: size === 'large',
      ['h-9 py-2']: size === 'regular',
      ['h-6 py-1']: size === 'tiny',
      ['bg-basic-lightest border-basic-lightest pointer-events-none']: disabled || readOnly,
      ['bg-white border-alert']: error,
    },
    className
  );

  const inputClass = classNames({
    ['w-full flex bg-transparent border-0 p-0 m-0 focus:outline-none']: true,
  });

  const leftIconClass = classNames({
    ['flex items-center']: true,
    ['mr-2 text-subtle']: true,
    ['text-disabled']: !value,
  });

  const rightIconClass = classNames({
    ['flex items-center']: true,
    ['ml-2 text-subtle']: true,
  });

  return (
    <div className={classes} style={{ minWidth }} onClick={() => ref.current?.focus()}>
      {inlineLabel && (
        <div className="Input-inlineLabel">
          <Text appearance="subtle">{inlineLabel}</Text>
        </div>
      )}
      {size !== 'tiny' && icon && (
        <div className={leftIconClass}>
          <Icon name={icon} size={sizeMapping[size]} />
        </div>
      )}
      <input
        {...rest}
        ref={ref}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      />
      {disabled
        ? ''
        : actionIcon && (value || defaultValue)
        ? actionIcon
        : onClear &&
          (value || defaultValue) && (
            <div className={rightIconClass} onClick={(e) => onClear(e)}>
              <Icon name={'close'} size={sizeMapping[size]} />
            </div>
          )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
