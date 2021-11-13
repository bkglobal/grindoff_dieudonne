import React from 'react';
import BillingInformationPage from 'src/components/features/dashboard/BillingInformation';
import { DashboardLayout } from 'src/components/features/layouts';

const BillingInformation = () => {
  return (
    <DashboardLayout>
      <BillingInformationPage />
    </DashboardLayout>
  );
};

export default BillingInformation;
