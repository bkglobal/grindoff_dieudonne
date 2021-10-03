import React from 'react';
import HeaderNavigation from '../navigation/HeaderNavigation';
import SideNavigation from '../navigation/SideNavigation';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-nowrap bg-body-grey">
      <SideNavigation />
      <div className="flex flex-col h-screen w-full">
        <HeaderNavigation />
        <div className="overflow-auto flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
