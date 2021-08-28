import Image from 'next/image';
import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Icon } from 'src/components/atoms/Icon';
import { Text } from 'src/components/atoms/Text';

export type Provider = {
  id: number;
  name: string;
  reviews: string;
  description: string;
  avatar: string;
  accomplishment: string;
  services: Array<{
    id: number;
    name: string;
    rate: string;
  }>;
};

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard = ({ provider }: ProviderCardProps) => {
  return (
    <Card className="relative h-full p-6 py-8 border-none flex flex-col">
      <div style={{ padding: '0.1rem 0' }} className="bg-primary px-2 absolute top-3 left-0 rounded-r-full flex items-center justify-center">
        <Icon name="star" className="p-0 m-0" appearance="white" size={14} />
      </div>
      <div className="flex border-b pb-4">
        <div className="rounded-full w-14 h-14 overflow-hidden">
          <Image src={provider.avatar} width="56px" height="56px" />
        </div>
        <div className="flex-grow flex flex-col px-4">
          <Text size="sm" weight="semibold">
            {provider.name}
          </Text>
          <Text size="sm" className="flex">
            <Icon name="star" className="mr-1" size={19} appearance="warning" /> {provider.reviews}
          </Text>
          <Text size="sm" className="flex">
            <Icon name="check_circle_outline" className="mr-1" size={19} appearance="success" />{' '}
            {provider.accomplishment}
          </Text>
        </div>
      </div>

      <div className="flex flex-col border-b py-4">
        <Text weight="semibold" className="mb-2" size="sm">
          Services
        </Text>
        {provider.services.map((svc) => (
          <div className="w-full my-1 flex flex-row justify-between">
            <Text size="sm">{svc.name}</Text>
            <Text weight="semibold" size="sm">
              {svc.rate}
            </Text>
          </div>
        ))}
      </div>

      <div className="flex flex-col py-4">
        <Text weight="semibold" className="mb-2" size="sm">
          Provider’s description:
        </Text>
        <Text className="" size="sm">
          {provider.description}
        </Text>
      </div>
    </Card>
  );
};

export default ProviderCard;
