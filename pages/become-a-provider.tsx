import { useRouter } from 'next/dist/client/router';
import React from 'react';
import BecomeProviderPage, { StepSlug } from 'src/components/features/provider/BecomeProviderPage';

const BecomeAProvider = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start justify-start min-h-screen">
      <BecomeProviderPage step={router.query.step as StepSlug} router={router} />
    </div>
  );
};

export default BecomeAProvider;
