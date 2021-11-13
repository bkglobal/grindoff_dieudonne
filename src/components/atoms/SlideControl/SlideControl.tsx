import classNames from 'classnames';
import React from 'react';
import { BaseProps } from 'src/components/common-types';
import { Icon } from '../Icon';

type NavigateBtn = BaseProps & {
  isLeft: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: string;
};

const SliderControl = React.forwardRef<HTMLButtonElement, NavigateBtn>(
  ({ className, isLeft, icon, ...rest }, ref) => {
    const arrowClasses = classNames(className, {
      'absolute top-1/2 focus:outline-none shadow-lg text-white text-2xl z-10 bg-white xx:h-8 xx:w-8 lg:h-10 lg:w-10 rounded-full border border-white flex items-center justify-center': true,
    });

    return (
      <button type="button" ref={ref} className={arrowClasses} {...rest}>
        <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
          {isLeft ? <Icon name={icon ? icon : "west"} appearance="success" /> : <Icon name={icon ? icon : "east"} appearance="primary" />}
        </span>
      </button>
    );
  }
);

export default SliderControl;
