import React from 'react';
import DashboardPage from 'src/components/features/dashboard/DashboardPage';
import { DashboardLayout } from 'src/components/features/layouts';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
};

export default Dashboard;
