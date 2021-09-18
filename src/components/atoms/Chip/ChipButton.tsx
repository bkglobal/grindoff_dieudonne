import classNames from 'classnames';
import React from 'react';
import { Icon } from '../Icon';

export interface ChipButtonProps {
  children: React.ReactNode;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const ChipButton = (props: ChipButtonProps) => {
  const { children, onClose } = props;

  const chipButtonClasses = classNames(
    'flex flex-row justify-center items-start text-sm px-3 py-1 box-border relative cursor-auto select-none align-middle border-0 text-center bg-basic font-normal'
  );

  return (
    <span className={chipButtonClasses}>
      {children}
      <Icon name="close" onClick={onClose} className="ml-3 cursor-pointer my-auto" />
    </span>
  );
};

export default ChipButton;
