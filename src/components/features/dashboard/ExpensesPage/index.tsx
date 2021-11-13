import { useState } from 'react';
import { Card, IncomeCard } from 'src/components/atoms/Card';
import Collapse from 'src/components/atoms/Collapse/Collapse';
import { Text } from 'src/components/atoms/Text';
import StatisticBarChartCard from 'src/components/molecules/Cards/StatisticBarChartCard';
import Tabs from 'src/components/molecules/Tabs/Tabs';

interface TypeTabItemPayload {
  tabTitle: string;
  title: string;
  component?: JSX.Element;
  displayCard: boolean;
  cardItems?: {
    title: string;
    primaryText: string;
    secondarText: string;
  };
  displayCollapse: boolean;
  collapseComponent?: (data: object) => JSX.Element;
  displayStatistics: boolean;
}

const TabItems: TypeTabItemPayload[] = [
  {
    tabTitle: 'Total amount spent',
    title: 'Total Amount Spent',
    displayCard: true,
    cardItems: {
      title: 'Income',
      primaryText: 'N 105.050',
      secondarText: 'You have not made any income',
    },
    displayCollapse: false,
    displayStatistics: false,
  },
  {
    tabTitle: 'Total number of upcoming jobs',
    title: 'Upcoming Jobs',
    displayCard: false,
    displayCollapse: false,
    displayStatistics: true,
  },
  {
    tabTitle: 'Total number of completed jobs',
    title: 'Completed Jobs',
    displayCard: false,
    displayCollapse: false,
    displayStatistics: true,
  },
  {
    tabTitle: 'Total number of cancelled jobs',
    title: 'Cancelled Jobs',
    displayCard: false,
    displayCollapse: false,
    displayStatistics: true,
  },
  {
    tabTitle: 'Total amount spent on each jobs',
    title: 'Amont Spent on Each Job',
    displayCard: true,
    cardItems: {
      title: 'Income',
      primaryText: 'N 105.050',
      secondarText: 'You have not made any income',
    },
    displayCollapse: true,
    collapseComponent: () => {
      const overviews = [
        {
          name: 'Delivery Items',
          value: 'N 8,000',
        },
        {
          name: 'Bedroom cleaning',
          value: 'N 4,000',
        },
        {
          name: 'Garden beautification',
          value: 'N 10,000',
        },
        {
          name: 'Food delivery',
          value: 'N 3,500',
        },
      ];
      return (
        <section>
          {overviews.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between">
                <Text size={'sm'}>{item.name}</Text>
                <Text size={'sm'}>{item.value}</Text>
              </div>
              {!(index + 1 >= overviews.length) && <hr className="my-2"/>}
            </div>
          ))}
        </section>
      );
    },
    displayStatistics: false,
  },
  {
    tabTitle: 'Total amount spent so far this month',
    title: 'Amount Spent so far this Month',
    displayCard: true,
    cardItems: {
      title: 'Income',
      primaryText: 'N 105.050',
      secondarText: 'You have not made any income',
    },
    displayCollapse: false,
    displayStatistics: false,
  },
];

const ExpensesPage = () => {
  const [tabItem, setTabItem] = useState(TabItems[0]);

  const handleChangeTab = (index: number) => {
    setTabItem(TabItems[index]);
  };

  return (
    <div className="flex flex-col xs:px-3 xs:pb-3 lg:px-6 lg:pb-6">
      <Tabs onTabChange={handleChangeTab} tabItems={TabItems.map((tab) => ({ tabTitle: tab.tabTitle }))} />
      <hr className="my-8" />
      <Card>
        <section className="p-4">{tabItem.title}</section>
        <hr />
        <section className="p-4">
          <Card className="w-full h-40"></Card>
        </section>
        <section className="p-4 grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          {tabItem.displayCard && (
            <IncomeCard
              title={tabItem.cardItems?.title || ''}
              primaryText={tabItem.cardItems?.primaryText || ''}
              secondaryText={tabItem.cardItems?.secondarText || ''}
            />
          )}
          {tabItem.displayCollapse && (
            <Collapse buttonTitle="View Each Service Overview Amount">
              {tabItem.collapseComponent ? tabItem.collapseComponent({}) : <></>}
            </Collapse>
          )}
        </section>
        {tabItem.displayStatistics && (
          <section className="p-4 grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <StatisticBarChartCard />
            <StatisticBarChartCard />
            <StatisticBarChartCard />
          </section>
        )}
      </Card>
    </div>
  );
};

export default ExpensesPage;
