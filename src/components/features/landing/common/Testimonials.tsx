import React from 'react';
import dynamic from 'next/dynamic';
import { Heading } from 'src/components/atoms/Heading';
const TestimonialSlides = dynamic(() => import('./Carousels/TestimonialSlids'), { ssr: false });

const Testimonials = () => {
  return (
    <section className="bg-basic-light py-14 sm:mt-6 md:mt-0 flex items-center flex-col w-full">
      <header className="flex flex-col items-center max-w-2xl">
        <Heading size="6xl" className="mb-6 text-center text-4xl xx:text-2xl lg:text-3xl">
          What People Are Saying
        </Heading>
      </header>
      <TestimonialSlides />
    </section>
  );
};

export default Testimonials;
