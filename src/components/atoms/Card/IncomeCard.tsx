import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '../../common-types';
import { Heading } from 'src/components/atoms/Heading';
import ExpenseIcon from 'src/components/atoms/Svgs/dashboard/ExpenseIcon';
import { Text } from 'src/components/atoms/Text';


export interface IncomeCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    title: string;
    primaryText: string;
    secondaryText: string;
}

export const IncomeCard = React.forwardRef<HTMLDivElement, IncomeCardProps>((props, ref) => {
  const {title, primaryText, secondaryText,  className, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={classNames(' max-w-md relative', className)}>
      <img src={'/assets/shared/income_card_bg.png'} />
      <section className="absolute w-full h-full top-0 left-0">
        <div className="w-full h-1/4 flex flex-row gap-2 justify-center items-center">
          <ExpenseIcon fill="white" />
          <Heading appearance="white" size="3xl">
             {title}
          </Heading>
        </div>
        <hr />
        <div className="w-full h-3/4 flex flex-col justify-center items-center">
          <Heading appearance="white" size="4xl">
            {primaryText}
          </Heading>
          <Text appearance="white" className="xx:text-sm whitespace-nowrap">{secondaryText}</Text>
        </div>
      </section>
    </div>
  );
});

IncomeCard.displayName = 'IncomeCard';

export default IncomeCard;
