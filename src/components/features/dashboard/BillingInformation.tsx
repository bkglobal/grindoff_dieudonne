import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';
import { Button } from 'src/components/atoms/Button';
import { Icon } from 'src/components/atoms/Icon';
import PaymentBankCard from 'src/components/molecules/Cards/PaymentBankCard';

const paymentHolderCards = [
  {
    cardHolderName: 'Mashood Abiola',
    cardNumber: '5396081 ** **** 5138',
    expiry: '12/22',
    defaultCard: true,
  },
  {
    cardHolderName: 'Mashood Abiola',
    cardNumber: '5396081 ** **** 5138',
    expiry: '12/22',
    defaultCard: false,
  },
];

const BillingInformationPage = () => {
  return (
    <>
      <div className="flex flex-col xx:px-5 lg:px-6">
        <header className="border-b flex justify-between items-baseline mb-3">
          <Heading size="5xl" className="mb-3 mt-8 xx:text-3xl sm:text-3xl lg:font-medium">
            Billing Information
          </Heading>
        </header>
        <Card>
          <section className="p-4 flex justify-between">
            <Heading size="xl">Payment Cards</Heading>
            <Button appearance="primary" icon={'add_circle_outline'} largeIcon={true}>
              Add New Card
            </Button>
          </section>
          <hr />

          <div className="p-4">
            {/* Credit Card Section */}
            <section className="grid lg:grid-cols-3 sm:grid-cols-1">
              {paymentHolderCards.map((card) => (
                <div className="flex flex-row">
                  <PaymentBankCard {...card} />
                  <Icon name="delete" size={28} appearance="destructive" className="cursor-pointer" />
                </div>
              ))}
            </section>

            {/* Bank Account Detail Section */}
            <section className="mt-10">
              <Card shadow="none" defaultBorder radius="square">
                <section className="p-4">
                  <Heading size="xl">Bank Account Details</Heading>
                </section>
                <hr />
                <section className="p-4 flex justify-between">
                  <div>
                    <div className="grid grid-cols-2 gap-6 p-4">
                      <Text>Bank Name: </Text>
                      <Text>First Bank PLC</Text>
                    </div>
                    <div className="grid grid-cols-2  gap-6 p-4">
                      <Text>Account Name: </Text>
                      <Text>Ejike Goodwill</Text>
                    </div>
                    <div className="grid grid-cols-2 gap-6 p-4">
                      <Text>Account Number: </Text>
                      <Text>00985426344</Text>
                    </div>
                  </div>
                  <div>
                    <Button appearance="primary" icon={'add_circle_outline'} largeIcon={true}>
                      Add New Bank
                    </Button>
                  </div>
                </section>
              </Card>
            </section>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BillingInformationPage;
