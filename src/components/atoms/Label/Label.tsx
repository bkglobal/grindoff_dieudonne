import classNames from 'classnames';
import React from 'react';
import { BaseProps } from 'src/components/common-types';

export interface LabelProps extends BaseProps {
  children: React.ReactNode;
}

const Label = (props: LabelProps) => {
  const { className, children, ...rest } = props;

  const classes = classNames('text-lg font-normal mb-2', className);

  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  );
};

export default Label;
