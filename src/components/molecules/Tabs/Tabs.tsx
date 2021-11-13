import classNames from 'classnames';
import { useState } from 'react';
import { Card } from 'src/components/atoms/Card';
import { Shadow } from 'src/components/atoms/Card/Card';
import { Text } from 'src/components/atoms/Text';
import styled from 'styled-components';

const PageHeader = styled.header`
  .Tab {
    position: relative;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding: 12px 1.5rem;
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

export type TypeTabPayload = {
  tabTitle: string;
};

interface ITabsProps {
  tabItems: TypeTabPayload[];
  onTabChange: (index: number) => void;
  shadow: Shadow;
  border?: boolean;
}

function Tabs({ tabItems, onTabChange, shadow, border=true }: ITabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    onTabChange(tabIndex);
    setActiveTabIndex(tabIndex);
  };

  return (
    <PageHeader>
      <Card className={classNames("flex flex-col", {'border-none': !border})} shadow={shadow}>
        <div className="grid auto-cols-auto grid-flow-col border-b w-full overflow-x-auto overflow-y-hidden">
          {tabItems.map((item, index) => (
            <div
              key={index}
              className={classNames('Tab hover:bg-gray-100 ', {
                'bg-body-grey': activeTabIndex !== index,
                'bg-white Tab--active': activeTabIndex === index,
              })}
              tabIndex={activeTabIndex === index ? index : -1}
              onClick={() => handleTabClick(index)}
            >
              <Text size="sm" weight="normal" className="xs:whitespace-nowrap lg:whitespace-normal text-center justify-center items-center flex">
                {item.tabTitle}
              </Text>
            </div>
          ))}
        </div>
      </Card>
    </PageHeader>
  );
}

export default Tabs;
