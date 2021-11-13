import React from 'react';
import WalletPage from 'src/components/features/dashboard/WalletPage';
import { DashboardLayout } from 'src/components/features/layouts';

const Expenses = () => {
  return (
    <DashboardLayout>
      <WalletPage />
    </DashboardLayout>
  );
};

export default Expenses;
