import classNames from 'classnames';
import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import { Input } from 'src/components/atoms/Input';
import Pagination from 'src/components/atoms/Pagination';
import ClockIcon from 'src/components/atoms/Svgs/dashboard/ClockIcon';
import LocationIcon from 'src/components/atoms/Svgs/dashboard/LocationIcon';
import ReplyIcon from 'src/components/atoms/Svgs/dashboard/ReplyIcon';
import RoundHeartIcon from 'src/components/atoms/Svgs/dashboard/RoundHeartIcon';
import SendIcon from 'src/components/atoms/Svgs/dashboard/SendIcon';
import TieIcon from 'src/components/atoms/Svgs/dashboard/TieIcon';
import TinyCreditCardIcon from 'src/components/atoms/Svgs/dashboard/TinyCreditCardIcon';
import { Text } from 'src/components/atoms/Text';
import styled from 'styled-components';
import { jobs } from './data';

const PageHeader = styled.header`
  .Tab {
    position: relative;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    min-width: 120px;
    padding: 12px 1.5rem;
    margin-left: calc(-1 * 12px);
    margin-right: 12px;
    margin-bottom: calc(-1 * 1px);
    text-align: center;
    display: flex;
    justify-content: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:hover {
      &::after {
        height: 0;
        border-top: 3px solid #14a800;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
    }
  }

  .Tab--active span {
    font-weight: 500 !important;
  }

  .Tab--active::after {
    height: 0;
    border-top: 3px solid #14a800;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  .Tab::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    margin-top: 10px;
    width: calc(100% - 2 * 3px);
    background-color: transparent;
    margin-left: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

const DashboardPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex: number) => setActiveTabIndex(tabIndex);

  return (
    <div className="flex flex-col">
      <PageHeader>
        <Heading size="5xl" className="mb-3 mt-8 xx:text-3xl sm:text-3xl xx:mx-3 lg:mx-6 lg:font-medium">
          Dashboard
        </Heading>

        <div className="flex flex-col mt-2 xx:pl-5 lg:px-6">
          <div className="flex border-b w-full overflow-x-auto overflow-y-hidden">
            <div
              className={classNames('Tab hover:bg-gray-100 rounded', { 'Tab--active': activeTabIndex === 0 })}
              tabIndex={activeTabIndex === 0 ? 0 : -1}
              onClick={() => handleTabClick(0)}
            >
              <Text size="sm" weight="normal" className="whitespace-nowrap">
                New Jobs
              </Text>
            </div>
            <div
              className={classNames('Tab hover:bg-gray-100 rounded', { 'Tab--active': activeTabIndex === 1 })}
              tabIndex={activeTabIndex === 1 ? 0 : -1}
              onClick={() => handleTabClick(1)}
            >
              <Text size="sm" weight="normal" className="whitespace-nowrap">
                Assigned Jobs
              </Text>
            </div>
            <div
              className={classNames('Tab hover:bg-gray-100 rounded', { 'Tab--active': activeTabIndex === 2 })}
              tabIndex={activeTabIndex === 2 ? 0 : -1}
              onClick={() => handleTabClick(2)}
            >
              <Text size="sm" weight="normal" className="whitespace-nowrap">
                Negotiate
              </Text>
            </div>
            <div
              className={classNames('Tab hover:bg-gray-100 rounded', { 'Tab--active': activeTabIndex === 3 })}
              tabIndex={activeTabIndex === 3 ? 0 : -1}
              onClick={() => handleTabClick(3)}
            >
              <Text size="sm" weight="normal" className="whitespace-nowrap">
                Confirmed Jobs
              </Text>
            </div>
            <div
              className={classNames('Tab hover:bg-gray-100 rounded', { 'Tab--active': activeTabIndex === 4 })}
              tabIndex={activeTabIndex === 4 ? 0 : -1}
              onClick={() => handleTabClick(4)}
            >
              <Text size="sm" weight="normal" className="whitespace-nowrap">
                Ongoing Jobs
              </Text>
            </div>
            <div
              className={classNames('Tab hover:bg-gray-100 rounded', { 'Tab--active': activeTabIndex === 5 })}
              tabIndex={activeTabIndex === 5 ? 0 : -1}
              onClick={() => handleTabClick(5)}
            >
              <Text size="sm" weight="normal" className="whitespace-nowrap">
                Completed Jobs
              </Text>
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="xx:p-5 lg:p-6 grid xx:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="py-5 px-4 border-none" shadow="medium">
            <div className="flex justify-between items-end mb-3">
              <Text weight="medium" size="sm">
                {job.title}
              </Text>
              <RoundHeartIcon />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center py-1.5">
                <Text size="xs" className="flex items-center whitespace-nowrap">
                  <ReplyIcon className="mr-1" /> Request Date:
                </Text>
                <Text size="xs" weight="medium" className="whitespace-nowrap">
                  {job.requestDate}
                </Text>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <Text size="xs" className="flex items-center whitespace-nowrap">
                  <ClockIcon className="mr-1" /> Budget Rate:
                </Text>
                <Text size="xs" weight="medium" className="whitespace-nowrap">
                  {job.budgetRate}
                </Text>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <Text size="xs" className="flex items-center whitespace-nowrap">
                  <TieIcon className="mr-1" /> Job Type:
                </Text>
                <Text size="xs" weight="medium" className="whitespace-nowrap">
                  {job.jobType}
                </Text>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <Text size="xs" className="flex items-center whitespace-nowrap">
                  <SendIcon className="mr-1" /> Posted:
                </Text>
                <Text size="xs" weight="medium" className="whitespace-nowrap">
                  {job.posted}
                </Text>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <Text size="xs" className="flex items-center whitespace-nowrap">
                  <LocationIcon className="mr-1" /> Location:
                </Text>
                <Text size="xs" weight="medium" className="whitespace-nowrap">
                  {job.location}
                </Text>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <Text size="xs" className="flex items-center whitespace-nowrap">
                  <TinyCreditCardIcon className="mr-1" /> Bid Amount:
                </Text>
                <div className="whitespace-nowrap flex items-center pl-6">
                  <Input
                    size="tiny"
                    className="xx:h-6 xx:text-xs xx:leading-2"
                    minWidth={50}
                    placeholder="0.00"
                    min={0.0}
                    type="number"
                  />
                  <Button
                    size="tiny"
                    appearance="primary"
                    className="xx:border-transparent ml-1 xx:text-xs xx:leading-2 xx:h-6"
                  >
                    Bid
                  </Button>
                </div>
              </div>

              <Button className="mt-4 xx:text-xs">Request Job</Button>
              <Button className="mt-2 xx:text-xs xx:border-transparent" appearance="primary">
                View Job
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="xx:px-5 lg:px-6 mb-6">
        <Pagination />
      </div>
    </div>
  );
};

export default DashboardPage;
