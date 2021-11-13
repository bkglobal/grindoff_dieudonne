import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '../../common-types';
import { Text } from 'src/components/atoms/Text';
import { Card } from 'src/components/atoms/Card';
import { Icon } from 'src/components/atoms/Icon';

export interface StripCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    icon: JSX.Element;
}

export const StripCard = React.forwardRef<HTMLDivElement, StripCardProps>((props, ref) => {
  const { title, icon, className, ...rest } = props;

  return (
    <Card ref={ref} defaultBorder radius="square" {...rest} className={classNames('w-full p-3 bg-primary-lightest cursor-pointer', className)}>
      <div className="w-full flex flex-row justify-between items-center ">
        <div className="flex flex-row justify-center items-center gap-2">
            <span className="bg-primary rounded-full p-2">
            {icon}
            </span>
            <Text>{title}</Text>
        </div>
        <Icon name="chevron_right" className="mr-2" size={28} />
      </div>
    </Card>
  );
});

StripCard.displayName = 'StripCard';

export default StripCard;
