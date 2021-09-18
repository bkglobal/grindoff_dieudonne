import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from 'src/components/common-types';
import { Icon } from '../Icon';
import { Text } from '../Text';
export type Size = 'regular' | 'tiny';

export const uidGenerator = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    const s = (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    return s;
  });
  return uuid;
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface CheckboxProps extends BaseProps {
  /**
   * Size of the `Checkbox`
   * @default "regular"
   */
  size?: Size;
  /**
   * Default value of checked (Used in case of uncontrolled `Checkbox`)
   */
  defaultChecked?: boolean;
  /**
   * Denotes Selection (Used in case of controlled `Checkbox`)
   */
  checked?: boolean;
  /**
   * Disables the `Checkbox`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Describes Label of the `Checkbox`
   */
  label?: string;
  /**
   * Name of the `Checkbox`
   */
  name?: string;
  /**
   * Value of the `Checkbox`
   */
  value?: string | number;
  /**
   * Specifies tab index of `Checkbox`
   * @default 0
   */
  tabIndex?: number;
  /**
   * Callback function called when user the selects an option
   */
  onChange?: (event: ChangeEvent) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    tabIndex = 0,
    defaultChecked,
    label,
    disabled,
    onChange,
    name,
    value,
    className,
    checked: checkedProp,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(
    forwardedRef,
    (): HTMLInputElement => {
      return ref.current as HTMLInputElement;
    }
  );

  const [checked, setChecked] = React.useState(props.checked === undefined ? defaultChecked : props.checked);

  React.useEffect(() => {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  const CheckboxClass = classNames(
    {
      ['flex flex-nowrap items-start select-none box-border py-0.5']: true,
      ['Checkbox--disabled']: disabled,
    },
    className
  );

  const CheckboxOuterWrapper = classNames({
    ['relative mt-0.5']: true,
    [`h-4 w-4`]: size === 'regular',
    [`h-3 w-3`]: size === 'tiny',
  });

  const CheckboxTextClass = classNames({
    ['pl-2 flex items-center pointer-cursor']: true,
  });

  const CheckboxInputWrapper = classNames({
    ['cursor-pointer h-full w-full m-0']: true,
    ['opacity-1']: checked,
  });

  const CheckboxWrapper = classNames({
    ['relative mt-0.5']: true,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.checked === undefined) {
      setChecked(e.target.checked);
    }
    if (onChange) onChange(e);
  };
  const id = `${name}-${label}-${uidGenerator()}`;
  const IconName = checked ? 'check' : '';
  const IconSize = size === 'tiny' ? 12 : 16;

  return (
    <div className={CheckboxClass}>
      <div className={CheckboxOuterWrapper}>
        <input
          {...rest}
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChangeHandler}
          checked={checked}
          disabled={disabled}
          ref={ref}
          name={name}
          value={value}
          className={CheckboxInputWrapper}
          tabIndex={tabIndex}
          id={id}
        />
        <span className={CheckboxWrapper}>
          {IconName && <Icon name={IconName} size={IconSize} appearance={'white'} />}
        </span>
      </div>
      {label && label.trim() && (
        <label htmlFor={id} className={CheckboxTextClass}>
          <Text weight="normal" size={size === 'tiny' ? 'sm' : 'base'} appearance={disabled ? 'disabled' : 'default'}>
            {label.trim()}
          </Text>
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
