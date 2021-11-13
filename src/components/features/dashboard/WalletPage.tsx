import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';
import StripCard from 'src/components/molecules/Cards/StripCard';
import ExpenseIcon from 'src/components/atoms/Svgs/dashboard/ExpenseIcon';
import Tabs from 'src/components/molecules/Tabs/Tabs';
import dynamic from 'next/dynamic';
import { TQuickActions } from 'src/components/molecules/QuickActions';

const QuickActions = dynamic(() => import('src/components/molecules/QuickActions'), { ssr: false });
const transactionHistoryTabItems = [{ tabTitle: 'Transaction History' }, { tabTitle: 'Payment Summary' }];
const transactionTableData = [
  {
    date: 'July 10, 2021',
    type: 'Per hour',
    description: 'Payment received from John Mike from home cleaning',
    amount: 'N 6,000',
  },
  {
    date: 'July 09, 2021',
    type: 'Fixed price',
    description: 'Payment received for online delivery',
    amount: 'N 10,000',
  },
  {
    date: 'July 07, 2021',
    type: 'Per service',
    description: 'Payment received for Grocery delivery',
    amount: 'N 2,500',
  },
];

const quickActionData: TQuickActions[] = [
  {
    title: 'Buy Airtime',
    icon: 'install_mobile',
  },
  {
    title: 'Buy Mobile Data',
    icon: 'wifi',
  },
  {
    title: 'Bill Payment',
    icon: 'event_note',
  },
  {
    title: 'DSTV',
    icon: 'desktop_windows',
  },
  {
    title: 'GOtv',
    icon: 'wifi',
  },
  {
    title: 'Electricity Bill',
    icon: 'electrical_services',
  },
  {
    title: 'Buy Mobile Data',
    icon: 'wifi',
  },
  {
    title: 'Bill Payment',
    icon: 'event_note',
  },
];

const WalletPage = () => {
  const handleChangeTab = () => {};
  return (
    <>
      <div className="flex flex-col xx:px-5 lg:px-6">
        <header className="border-b flex justify-between items-baseline mb-6">
          <Heading size="5xl" className="mb-3 mt-8 xx:text-3xl sm:text-3xl lg:font-medium">
            Wallet
          </Heading>
        </header>
        <Card>
          {/* Wallet Balance Section */}
          <section className="p-6 text-center">
            <div className="p-6 bg-wallet-bg">
              <div className=" mb-14 space-y-4">
                <Text>Wallet Balance</Text>
                <Heading size="4xl">N 0.00</Heading>
              </div>
              <div className="flex xs:flex-col lg:flex-row lg:justify-between p-4 bg-white gap-6">
                <StripCard title="Deposit" icon={<ExpenseIcon fill="white" />} />
                <StripCard title="Withdraw Balance" icon={<ExpenseIcon fill="white" />} />
              </div>
            </div>
          </section>

          {/* Quick Action Section */}
          <section className="p-6">
            <QuickActions quickActions={quickActionData} />
          </section>

          {/* Transaction History Payment Section */}
          <section>
            <Tabs
              onTabChange={handleChangeTab}
              shadow="none"
              border={false}
              tabItems={transactionHistoryTabItems}
            />
            <div className="w-full p-4">
              <table className="w-full table-auto border ">
                <thead>
                  <tr>
                    <th className="border p-4">Date</th>
                    <th className="border p-4">Type</th>
                    <th className="border p-4">Description</th>
                    <th className="border p-4">Amount</th>
                  </tr>
                </thead>
                <tbody className=" text-center">
                  {transactionTableData.map((data) => (
                    <tr>
                      <td className="p-4  border-r">
                        <Text size="xs">{data.date}</Text>
                      </td>
                      <td className="p-4 border-r">
                        <Text size="xs">{data.type}</Text>
                      </td>
                      <td className="p-4 border-r">
                        <Text size="xs">{data.description}</Text>
                      </td>
                      <td className="p-4 border-r">
                        <Text size="xs">{data.amount}</Text>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Card>
      </div>
    </>
  );
};

export default WalletPage;
