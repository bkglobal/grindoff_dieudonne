import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import styled from 'styled-components';

const PageHeader = styled.header`
  .Tab {
    position: relative;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    min-width: 40px;
    padding: 12px 1.5rem;
    margin-left: calc(-1 * 12px);
    margin-right: 12px;
    margin-bottom: calc(-1 * 1px);
    text-align: center;
  }

  .Tab--active::after {
    height: 0;
    border-top: 3px solid #14a800;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
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
  return (
    <div className="flex flex-col">
      <PageHeader>
        <Heading size="5xl" className="mb-3 xx:text-3xl sm:text-3xl lg:font-medium">
          Dashboard
        </Heading>

        <div className="flex flex-col mt-2">
          <div className="flex border-b">
            <div className="Tab Tab--active" tabIndex={0}>
              <span className="Text Text--regular">Draft Jobs</span>
            </div>
            <div className="Tab" tabIndex={-1}>
              <span className="Text Text--regular">Posted Jobs</span>
            </div>
            <div className="Tab" tabIndex={-1}>
              <span className="Text Text--regular">Assigned Jobs</span>
            </div>
            <div className="Tab" tabIndex={-1}>
              <span className="Text Text--regular">Negotiate</span>
            </div>
            <div className="Tab" tabIndex={-1}>
              <span className="Text Text--regular">Confirmed Jobs</span>
            </div>
            <div className="Tab" tabIndex={-1}>
              <span className="Text Text--regular">Ongoing Jobs</span>
            </div>
            <div className="Tab" tabIndex={-1}>
              <span className="Text Text--regular">Completed Jobs</span>
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="py-8 grid grid-cols-4">
        <Card>
          <div className="flex w-ful h-8 bg-basic-transparent"></div>
          Card
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
