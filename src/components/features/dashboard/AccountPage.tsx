import classNames from 'classnames';
import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
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
          <Text size="lg" className="w-11/12">
            To Enjoy the full benefit of GrindOff without any restriction, Please Complete your Account
            settings below to enjoy the all benefits of GrindOff Services
          </Text>

          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="bg-body-grey-lightest flex items-center h-20 p-2">
              <div className="h-full w-16 rounded-sm flex justify-center items-center bg-primary-lightest mr-8">
                <img src="/assets/icons/id.png" alt="ID" className="w-6" />
              </div>
              <Text className="font-medium">Upload Government Issued ID</Text>
            </div>
            <div className="bg-body-grey-lightest flex items-center h-20 p-2">
              <div className="h-full w-16 rounded-sm flex justify-center items-center bg-primary-lightest mr-8">
                <img src="/assets/icons/id.png" alt="NIN" className="w-6" />
              </div>
              <Text className="font-medium">Upload NIN</Text>
            </div>
            <div className="bg-body-grey-lightest flex items-center h-20 p-2">
              <div className="h-full w-16 rounded-sm flex justify-center items-center bg-primary-lightest mr-8">
                <img src="/assets/icons/Bank.png" alt="BVN" className="w-6" />
              </div>
              <Text className="font-medium">Input your BVN</Text>
            </div>
            <div className="bg-body-grey-lightest flex items-center h-20 p-2">
              <div className="h-full w-16 rounded-sm flex justify-center items-center bg-primary-lightest mr-8">
                <img src="/assets/icons/Bullet Points Numbers.png" alt="Bank" className="w-6" />
              </div>
              <Text className="font-medium">Bank Account Information</Text>
            </div>
          </div>

          <div className="w-4/12 mx-auto mt-16 mb-16">
            <Button expanded appearance="primary" size="large" className="xx:border-transparent">
              Save
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AccountPage;
