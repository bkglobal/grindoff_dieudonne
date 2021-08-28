import React from 'react'
import dynamic from 'next/dynamic'
import { Heading } from 'src/components/atoms/Heading';

const FeaturedProviders = dynamic(() => import('./Carousels/FeaturedProviders'), { ssr: false });

const FeaturedProvidersSection = () => {
  return (
    <div className="flex flex-col bg-primary-lightest items-center w-full py-14">
      <Heading size="6xl" className="mb-6 md:mb-16 text-center text-4xl xx:text-2xl lg:text-3xl">
        Featured Providers
      </Heading>
      <FeaturedProviders />
    </div>
  );
}

export default FeaturedProvidersSection;
