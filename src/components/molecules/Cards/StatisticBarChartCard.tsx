import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '../../common-types';
import { Text } from 'src/components/atoms/Text';
import { Card } from 'src/components/atoms/Card';

export interface StatisticBarChartCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
}

export const StatisticBarChartCard = React.forwardRef<HTMLDivElement, StatisticBarChartCardProps>(
  (props, ref) => {
    const { title, className, ...rest } = props;

    return (
      <Card ref={ref} {...rest} className={classNames('w-full', className)}>
        <section className="p-4 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <Text className="xx:text-sm whitespace-nowrap">
              Last Month (June)
            </Text>
            <Text appearance="disabled" className="xx:text-sm whitespace-nowrap">
                Statistics subinformation
            </Text>
          </div>
          <span>3.5%</span>
        </section>
        <section className="w-full h-40">
            {/* Place Bar Chart Here .. */}
        </section>
      </Card>
    );
  }
);

StatisticBarChartCard.displayName = 'StatisticBarChartCard';

export default StatisticBarChartCard;
