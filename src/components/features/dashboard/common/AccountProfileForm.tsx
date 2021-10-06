import React from 'react';
import Avatar from 'react-avatar';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import { Icon } from 'src/components/atoms/Icon';
import { Text } from 'src/components/atoms/Text';
import Textarea from 'src/components/atoms/Textarea/Textarea';

const AccountProfileForm = () => {
  return (
    <Card className="my-6 xx:border-none">
      <div className="p-6">
        <Avatar src="/assets/home/avatar-1.jpg" round />
        <Text appearance="success" size="sm" weight="normal" className="ml-4">
          Edit photo
        </Text>
      </div>

      <div className="pb-10">
        <div className="border-t w-full xx:px-3 md:px-6 py-4 grid grid-cols-12">
          <Text className="xx:col-span-3 lg:col-span-2" size="sm" weight="normal">
            Fist Name:
          </Text>
          <Text className="xx:col-span-8 lg:col-span-9" size="sm" weight="normal">
            Godwill
          </Text>
          <Text
            className="col-span-1 flex items-center cursor-pointer"
            size="sm"
            weight="normal"
            appearance="success"
          >
            <Icon name="edit" className="mr-2" /> Edit
          </Text>
        </div>
        <div className="border-t w-full xx:px-3 md:px-6 py-4 grid grid-cols-12">
          <Text className="xx:col-span-3 lg:col-span-2" size="sm" weight="normal">
            Last Name:
          </Text>
          <Text className="xx:col-span-8 lg:col-span-9" size="sm" weight="normal">
            Ejike
          </Text>
          <Text
            className="col-span-1 flex items-center cursor-pointer"
            size="sm"
            weight="normal"
            appearance="success"
          >
            <Icon name="edit" className="mr-2" /> Edit
          </Text>
        </div>
        <div className="border-t w-full xx:px-3 md:px-6 py-4 grid grid-cols-12">
          <Text className="xx:col-span-3 lg:col-span-2" size="sm" weight="normal">
            Contact:
          </Text>
          <Text className="xx:col-span-8 lg:col-span-9" size="sm" weight="normal">
            07069298070
          </Text>
          <Text
            className="col-span-1 flex items-center cursor-pointer"
            size="sm"
            weight="normal"
            appearance="success"
          >
            <Icon name="edit" className="mr-2" /> Edit
          </Text>
        </div>
        <div className="border-t w-full xx:px-3 md:px-6 py-4 grid grid-cols-12">
          <Text className="xx:col-span-3 lg:col-span-2" size="sm" weight="normal">
            Email:
          </Text>
          <Text className="xx:col-span-8 lg:col-span-9" size="sm" weight="normal">
            godswilldesmond@gmail.com
          </Text>
          <Text
            className="col-span-1 flex items-center cursor-pointer"
            size="sm"
            weight="normal"
            appearance="success"
          >
            <Icon name="edit" className="mr-2" /> Edit
          </Text>
        </div>
        <div className="border-t w-full xx:px-3 md:px-6 py-4 grid grid-cols-12">
          <Text className="col-span-3" size="sm" weight="normal">
            Alternative Contact (Optional):
          </Text>
        </div>

        <div className="border-t w-full xx:px-3 md:px-6 py-4 grid grid-cols-12">
          <Text className="xx:col-span-3 lg:col-span-2" size="sm" weight="normal">
            Description:
          </Text>
          <div className="xx:col-span-9 lg:col-span-10 md:pr-8">
            <Textarea placeholder="Type description here...." rows={6} />
          </div>
        </div>
      </div>

      <div className="w-5/12 mx-auto mt-4 pb-10">
        <Button expanded appearance="primary" size="large">
          Continue
        </Button>
      </div>
    </Card>
  );
};

export default AccountProfileForm;
