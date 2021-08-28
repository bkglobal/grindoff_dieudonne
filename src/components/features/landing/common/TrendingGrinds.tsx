import React from 'react';
import Image from 'next/image'
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import { Icon } from 'src/components/atoms/Icon';
import { Text } from 'src/components/atoms/Text';

const services = [
  {
    id: 1,
    name: 'Carpenter & Furniture Repair',
    image_url: '/assets/home/carpenter-repair.jpg',
  },
  {
    id: 2,
    name: 'Home & Office Cleaning',
    image_url: '/assets/home/home-office-cleaning.png',
  },
  {
    id: 3,
    name: 'Haircut Home Service',
    image_url: '/assets/home/haircut-home-service.png',
  },
  {
    id: 4,
    name: 'Moving Services',
    image_url: '/assets/home/carpenter-repair.jpg',
  },
  {
    id: 5,
    name: 'Food and Drink Delivery',
    image_url: '/assets/home/food-drink-delivery.jpg',
  },
  {
    id: 6,
    name: 'Grocery Shopping & Delivery',
    image_url: '/assets/home/grocery-shopping.jpg',
  },
  {
    id: 7,
    name: 'Moving Services',
    image_url: '/assets/home/carpenter-repair.jpg',
  },
  {
    id: 8,
    name: 'Virtual & Online Task',
    image_url: '/assets/home/haircut-home-service.png',
  },
];

const TrendingGrinds = () => {
  return (
    <section className="bg-basic-light px-3 py-14 lg:px-16 sm:mt-6 md:mt-0 flex items-center flex-col w-full">
      <header className="flex flex-col items-center max-w-2xl">
        <Heading size="6xl" className="mb-6 text-center text-4xl xx:text-2xl lg:text-3xl">
          Trending Grinds near you.
        </Heading>
        <Text className="text-center">
          Choose the service you need, enter a few details, and get matched with vetted qualified and
          available Grinds.
        </Text>
      </header>
      <div className="my-14 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 lg:gap-y-6 w-full">
        {services.map((svc) => (
          <Card key={svc.id} className="p-4 rounded-3xl text-center flex flex-col">
            <Image
              layout="intrinsic"
              objectFit="cover"
              width={280}
              height={250}
              className="mb-2"
              src={svc.image_url}
              alt={svc.name}
            />
            <Text>{svc.name}</Text>
          </Card>
        ))}
      </div>
      <Button size="large" appearance="primary" outlined>
        View all services
        <Icon name="keyboard_arrow_down" appearance="primary" size={28} />
      </Button>
    </section>
  );
};

export default TrendingGrinds;
