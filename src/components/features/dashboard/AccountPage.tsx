import classNames from 'classnames';
import React, { useState } from 'react';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';
import AccountProfileForm from './common/AccountProfileForm';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'id_verification'>('profile');

  return (
    <div className="xx:px-3 lg:px-6">
      <Card className="flex flex-row xx:border-none xx:rounded-none" shadow="light">
        <div
          onClick={() => setActiveTab('profile')}
          className={classNames('w-1/2 cursor-pointer h-16 flex items-center justify-center', {
            'bg-body-grey': activeTab !== 'profile',
            'bg-white': activeTab === 'profile',
          })}
        >
          <Text size="sm" weight="normal" appearance={activeTab === 'profile' ? 'primary' : 'default'}>
            Profile
          </Text>
        </div>
        <div
          onClick={() => setActiveTab('id_verification')}
          className={classNames('w-1/2 cursor-pointer h-16 flex items-center justify-center', {
            'bg-body-grey': activeTab !== 'id_verification',
            'bg-white': activeTab === 'id_verification',
          })}
        >
          <Text
            size="sm"
            weight="normal"
            appearance={activeTab === 'id_verification' ? 'primary' : 'default'}
          >
            Identity Verification
          </Text>
        </div>
      </Card>
      <header className="border-b flex flex-col">
        <Heading size="5xl" className="mt-8 xx:text-3xl sm:text-3xl lg:font-medium">
          Account
        </Heading>
        <Text className="mb-3" appearance="subtle" size="sm">
          View and update basic information
        </Text>
      </header>

      {activeTab === 'profile' && <AccountProfileForm />}
      {activeTab === 'id_verification' && (
        <Card className="my-6 xx:border-none xx:px-3 md:px-6 py-8">
          <Text size="sm">
            To Enjoy the full benefit of GrindOff without any restriction, Please Complete your Account
            settings below to enjoy the all benefits of GrindOff Services
          </Text>

          <div className="grid grid-cols-2">
            <div className="">

            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AccountPage;
