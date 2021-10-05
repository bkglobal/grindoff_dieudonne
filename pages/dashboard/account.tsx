import React from 'react';
import AccountPage from 'src/components/features/dashboard/AccountPage';
import { DashboardLayout } from 'src/components/features/layouts';

const Account = () => {
  return (
    <DashboardLayout>
      <AccountPage />
    </DashboardLayout>
  );
};

export default Account;
