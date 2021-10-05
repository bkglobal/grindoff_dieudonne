import React from 'react';
import HistoryPage from 'src/components/features/dashboard/HistoryPage';
import { DashboardLayout } from 'src/components/features/layouts';

const History = () => {
  return (
    <DashboardLayout>
      <HistoryPage />
    </DashboardLayout>
  );
};

export default History;
