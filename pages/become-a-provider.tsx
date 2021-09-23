import { useRouter } from 'next/dist/client/router';
import React from 'react';
import BecomeProviderPage, { StepSlug } from 'src/components/features/provider/BecomeProviderPage';

const BecomeAProvider = () => {
  const router = useRouter();

  return (
    <>
      <BecomeProviderPage step={router.query.step as StepSlug} router={router} />
    </>
  );
};

export default BecomeAProvider;
