import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '../../common-types';
import { Text } from 'src/components/atoms/Text';
import { Card } from 'src/components/atoms/Card';
import { Icon } from 'src/components/atoms/Icon';

export interface PaymentBankCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  cardHolderName: string;
  cardNumber: string;
  expiry: string;
  defaultCard: boolean;
}

export const PaymentBankCard = React.forwardRef<HTMLDivElement, PaymentBankCardProps>((props, ref) => {
  const { title, className, cardHolderName, cardNumber, expiry, defaultCard, ...rest } = props;

  return (
    <Card
      ref={ref}
      defaultBorder
      radius="rounded"
      {...rest}
      className={classNames(
        ' rounded-lg max-w-xs p-4 bg-gradient-to-t from-bg-card-yellow to-bg-card-green cursor-pointer',
        className
      )}
    >
      <section className="flex flex-row justify-between items-center">
        <img src={'/assets/shared/bank-icon.png'} />
        {defaultCard && (
          <span className="flex justify-center items-center gap-2">
            <Icon name="done" appearance="white" />
            <Text size="sm" appearance="white" className="tracking-wide">
              Default
            </Text>
          </span>
        )}
      </section>
      <section className="text-center p-6">
        <Text appearance="white" size="lg" weight="medium" className=" tracking-wide">
          {cardNumber}
        </Text>
      </section>
      <section className="flex flex-row justify-between">
        <div className="flex flex-col">
          <Text size="xs" appearance="white" className="tracking-wide">
            Card Holder Name
          </Text>
          <Text appearance="white" className="tracking-wider">
            {cardHolderName}
          </Text>
        </div>
        <div className="flex flex-col">
          <Text size="xs" appearance="white" className="tracking-wide">
            Expiry
          </Text>
          <Text appearance="white" className="tracking-wider">
            {expiry}
          </Text>
        </div>
      </section>
    </Card>
  );
});

PaymentBankCard.displayName = 'PaymentBankCard';

export default PaymentBankCard;
