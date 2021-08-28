import React from 'react';
import Image from 'next/image';
import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';
import { Button } from 'src/components/atoms/Button';
import Portfolio from 'src/components/features/landing/common/Carousels/Portfolio';

const data = [
  {
    id: 1,
    title: 'Tell Us What and Where',
    text: 'Enter a service  description along with your name, locations and phone number.',
    image: '/assets/home/page.png',
  },
  {
    id: 2,
    title: 'Get Connected',
    text:
      'We use ratings, reviews, performance metrics to find the best pros. In minutes we will connect you with trusted providers.',
    image: '/assets/home/get-connected.png',
  },
  {
    id: 3,
    title: 'Get It Done',
    text:
      'Just like that, your provider steps in, offer you quality service and you make your payment through the app.',
    image: '/assets/home/shield.png',
  },
];

const HowItWorks = () => {
  return (
    <>
      <div className="bg-basic-light w-full flex flex-col px-3 py-14 lg:px-32 sm:mt-6 md:mt-0">
        <Heading size="6xl" className="mb-16 text-center text-4xl xx:text-2xl lg:text-3xl">
          How It Works
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-10">
          {data.map((d) => (
            <div key={d.id} className="flex flex-col items-center">
              <div className="h-20">
                <img src={d.image} alt={d.title} />
              </div>
              <Text className="my-4" weight="semibold">
                {d.title}
              </Text>
              <Text size="base" className="text-center">
                {d.text}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:h-96 px-3 lg:px-32 bg-earn-on-grindoff bg-no-repeat bg-cover bg-center flex flex-wrap xx:justify-center lg:justify-between lg:flex-nowrap">
        <div className="md:w-1/3 xx:mt-14 lg:mt-0 flex flex-col justify-center xx:items-center lg:items-start">
          <Text
            weight="semibold"
            size="lg"
            className="xx:mb-10 lg:mb-16 xx:text-center lg:text-left text-4xl xx:text-2xl lg:text-4xl lg:leading-10"
          >
            Earn up to{' '}
            <Text
              weight="semibold"
              size="lg"
              className="mb-16 text-4xl xx:text-2xl lg:text-4xl lg:leading-10"
              appearance="success"
            >
              N200,000
            </Text>{' '}
            monthly on Grindoff
          </Text>
          <Button size="large" className="lg:px-16" appearance="primary" outlined>
            Become a Provider
          </Button>
        </div>
        <div className="hidden md:flex">
          <Image
            layout="intrinsic"
            src="/assets/home/workers.png"
            objectFit="cover"
            className="h-full"
            width="600px"
            height="380px"
          />
        </div>
        <div className="xx:flex md:hidden mt-12">
          <Image
            layout="intrinsic"
            src="/assets/home/workers-mobile.png"
            objectFit="cover"
            className="h-full"
            width="500px"
            height="430px"
          />
        </div>
      </div>

      <div className="pt-14">
        <div className="flex justify-center px-3 xx:w-full md:w-6/12 lg:w-4/12 2xl:w-3/12 mx-auto">
          <Heading size="6xl" className="mb-6 md:mb-16 text-center text-4xl xx:text-2xl lg:text-3xl">
            Experience the great change from our expert Grindoff
          </Heading>
        </div>
        <Portfolio />
      </div>
    </>
  );
};

export default HowItWorks;
