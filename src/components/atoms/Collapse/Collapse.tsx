import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '../../common-types';
import { Icon } from '../Icon';

export type Shadow = 'none' | 'light' | 'medium' | 'dark';

export interface CollapseProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  buttonTitle: string;
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const { buttonTitle, children, className, ...rest } = props;
  const [show, setShow] = React.useState(false);
  const classes = classNames(
    {
      [`transition-all duration-500`]: true,
      [`w-full`]: true,
      [`hidden`]: !show,
      [`bg-gray-100`]: true,
      [`p-4`]: true,
    },
    className
  );

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div ref={ref} {...rest} className="max-w-lg rounded-md overflow-hidden">
      <div
        onClick={handleToggle}
        className="w-full p-4 flex justify-between items-center cursor-pointer bg-gray-100"
      >
        <span>{buttonTitle}</span>
        <Icon name={show ? "arrow_drop_up" : "arrow_drop_down"} size={28} appearance="basic-dark"  />
      </div>
      <div className={classes}>{children}</div>
    </div>
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
