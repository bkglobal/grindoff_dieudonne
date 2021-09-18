import React, { useEffect, useState } from 'react';
import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';
import { PageNavigation } from 'src/components/molecules/Navigation';
import SignupForm from './common/SignupForm';
import Stepper, { Step } from 'src/components/molecules/Stepper/Stepper';
import { NextRouter } from 'next/dist/client/router';
import BuildServiceProfileForm from './common/BuildServiceProfileForm';
import IDVerificationForm from './common/IDVerificationForm';
import WeeklyAvailability from './common/WeeklyAvailability';

type StepData = { icon: string; label: string; active: boolean; completed: boolean; slug: StepSlug };

const stepsData: Array<StepData> = [
  {
    icon: 'person',
    label: 'Signup',
    slug: 'signup',
    active: false,
    completed: false,
  },
  {
    icon: 'build',
    label: 'Build your service profile',
    slug: 'build-your-service-profile',
    active: false,
    completed: false,
  },
  {
    icon: 'verified_user',
    label: 'Identity verification',
    slug: 'identity-verification',
    active: false,
    completed: false,
  },
  {
    icon: 'payments',
    label: 'Set weekly availabilities and pricing',
    slug: 'set-weekly-availabilities-and-pricing',
    active: false,
    completed: false,
  },
];

export type StepSlug =
  | 'signup'
  | 'build-your-service-profile'
  | 'identity-verification'
  | 'set-weekly-availabilities-and-pricing';

interface Props {
  step: StepSlug;
  router?: NextRouter;
}
const BecomeProviderPage = (props: Props) => {
  const [steps, setSteps] = useState<Array<StepData>>(stepsData);
  const { step } = props;

  useEffect(() => {
    setSteps((prev) => prev.map((sp) => ({ ...sp, active: sp.slug === step })));
  }, [step]);

  const onStepClick = (stp: Step) => {
    setSteps((prev) =>
      prev.map((sp) => {
        if (sp.label === stp.label) {
          props.router?.push(`/become-a-provider?step=${sp.slug}`);
          return {
            ...sp,
            active: true,
          };
        }
        return { ...sp, active: false };
      })
    );
  };

  const onCompleteFirstStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSteps((prev) => prev.map((sp, i) => (i === 0 ? { ...sp, completed: true } : sp)));
    props.router?.push('/become-a-provider?step=build-your-service-profile');
  };

  const onCompleteSecStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSteps((prev) => prev.map((sp, i) => (i <= 1 ? { ...sp, completed: true } : sp)));
    props.router?.push('/become-a-provider?step=identity-verification');
  };

  const onCompleteThirdcStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSteps((prev) => prev.map((sp, i) => (i <= 2 ? { ...sp, completed: true } : sp)));
    props.router?.push('/become-a-provider?step=set-weekly-availabilities-and-pricing');
  };

  return (
    <div className="bg-body-grey min-h-screen w-full">
      <PageNavigation />
      <div className="flex flex-col items-center w-full xx:h-72 sm:h-96 bg-white overflow-hidden">
        <Heading
          size="6xl"
          className="xx:mb-6 sm:mb-8 xx:mt-10 sm:mt-20 text-center text-4xl xx:text-2xl lg:text-4xl"
        >
          Become a Provider
        </Heading>
        <Text className="xx:mb-4 sm:mb-10">Fill out form with basic information</Text>
        <div className="flex w-full">
          <div className="mx-auto p-4 xx:w-700 md:w-9/12">
            <Stepper onClick={onStepClick} steps={steps} />
          </div>
        </div>
      </div>

      <div className="">
        {step == 'signup' && <SignupForm onContinue={onCompleteFirstStep} />}
        {step == 'build-your-service-profile' && <BuildServiceProfileForm onContinue={onCompleteSecStep} />}
        {step == 'identity-verification' && <IDVerificationForm onContinue={onCompleteThirdcStep} />}
        {step === 'set-weekly-availabilities-and-pricing' && <WeeklyAvailability />}
      </div>
    </div>
  );
};

export default BecomeProviderPage;
