import Image from 'next/image';
import React from 'react';
import { Heading } from 'src/components/atoms/Heading';
import { PlayStoreCTA } from 'src/components/atoms/PlayStoreCTA';
import { Text } from 'src/components/atoms/Text';

const MobileApp = () => {
  return (
    <div className="px-3 sm:px-10 py-28 lg:px-14 bg-primary-lightest w-full h-1200 sm:h-600 md:h-650 flex flex-nowrap flex-col sm:flex-row justify-between overflow-hidden">
      <div className="w-full sm:w-600 flex flex-col self-center">
        <Heading
          size="3xl"
          className="mb-4 lg:mb-12 text-center sm:text-left text-4xl xx:text-2xl lg:text-3xl"
        >
          We make things easily and comfortable for you to live life
        </Heading>
        <Text size="lg" className="w-full sm:w-9/12 text-center sm:text-left">
          Download the App, Sign Up in minutes and that’s all you need to get help.{' '}
          <Text size="lg" className="text-center sm:text-left" weight="normal">
            Hassle FREE.
          </Text>
        </Text>
        <div className="flex flex-col mt-8 lg:mt-16">
          <Text size="xl" className="text-center sm:text-left">
            Download the App
          </Text>
          <Text size="xl" className="text-center sm:text-left">
            on Google Play or the App Store
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full sm:w-10/12">
            <PlayStoreCTA store="google" />
            <PlayStoreCTA store="apple" />
          </div>
        </div>
      </div>

      <div className="relative flex-grow flex justify-end">
        <div className="absolute sm:-right-96 md:-right-68 xl:-right-16 sm:-bottom-96 lg:-bottom-96 xl:-bottom-64 w-800">
          <Image src="/assets/home/ellipse.png" width="800px" height="600px" alt="" />
        </div>
        <div className="pr-0 md:pr-8 relative sm:-bottom-0 md:-top-16">
          <Image src="/assets/home/mockup1.png" width="420px" height="830px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
