import classNames from 'classnames';
import React from 'react';
import { Icon } from 'src/components/atoms/Icon';
import { Text } from 'src/components/atoms/Text';
import { StepSlug } from 'src/components/features/provider/BecomeProviderPage';

export type Step = {
  icon: string;
  label: string;
  active: boolean;
  slug: StepSlug;
  completed: boolean;
};

export interface StepperProps {
  steps: Array<Step>;
  onClick?: (step: Step) => void;
}

const Stepper = ({ steps, onClick = () => {} }: StepperProps) => {
  const stepClasses = (active: boolean) =>
    classNames(
      {
        ['bg-primary text-white']: active,
      },
      'rounded-full transition duration-500 ease-in-out xx:h-10 xx:w-10 sm:h-12 sm:w-12 py-3 bg-basic flex items-center justify-center'
    );

  const stepLineClasses = (active: boolean) =>
    classNames(
      {
        ['border-primary']: active,
      },
      'flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600'
    );

  return (
    <div className="flex items-center">
      {steps.map((step, i) => (
        <React.Fragment key={step.icon}>
          <div onClick={() => onClick(step)} className="flex items-center text-teal-600 relative cursor-pointer">
            <div className={stepClasses(step.active || step.completed)}>
              <Icon name={step.icon} size={20} />
            </div>
            <div className="flex items-center justify-center absolute top-0 xx:-ml-4 sm:-ml-20 mt-14 xx:w-24 sm:w-52">
              {step.completed && <Icon name="check_circle" appearance="primary" className="mr-1" size={17} />}
              <Text className="xx:text-sm md:text-base" size="base" weight="normal">
                {step.label}
              </Text>
            </div>
          </div>
          {i < steps.length - 1 && <div className={stepLineClasses(step.completed)} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
