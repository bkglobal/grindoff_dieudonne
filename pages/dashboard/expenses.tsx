import React from 'react';
import ExpensesPage from 'src/components/features/dashboard/ExpensesPage';
import { DashboardLayout } from 'src/components/features/layouts';

const Expenses = () => {
  return (
    <DashboardLayout>
      <ExpensesPage />
    </DashboardLayout>
  );
};

export default Expenses;
