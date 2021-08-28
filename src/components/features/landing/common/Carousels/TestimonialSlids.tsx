import React, { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SliderControl from 'src/components/atoms/SlideControl/SlideControl';
import { Card } from 'src/components/atoms/Card';
import { Text } from 'src/components/atoms/Text';
import Image from 'next/image';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];

const TestimonialSlides = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <div className="flex px-3 lg:px-16 md:py-16 justify-center w-full items-center">
      <div className="flex flex-row w-full relative">
        <SliderControl className="xx:left-4 lg:left-0" isLeft ref={prevRef} />
        <Swiper
          onInit={(swiper) => {
            (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
            (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={16}
          slidesPerView={3}
          className="py-4 mx-3 md:mx-20 lg:mx-28"
          breakpoints={{
            '100': {
              slidesPerView: 1.1,
            },
            '415': {
              slidesPerView: 2.1,
            },
            '769': {
              slidesPerView: 3,
            },
            '1025': {
              slidesPerView: 3,
            },
            '1281': {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {items.map((provider) => (
            <SwiperSlide key={provider.id}>
              <Card defaultBorder={false} className="border-2 shadow-none rounded-md flex flex-col">
                <Text as="blockquote" size="lg" className="px-6 py-6 text-subtle">
                  "Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending
                  strategy to make streamline the process"
                </Text>
                <div className="p-6 flex">
                  <div className="rounded-full w-12 h-12 overflow-hidden">
                    <Image src="/assets/home/avatar-1.jpg" width="48px" height="48px" />
                  </div>
                  <div className="flex-grow flex flex-col px-4">
                    <Text size="sm" weight="normal">
                      Mary Rose
                    </Text>
                    <Text size="sm" appearance="subtle" weight="normal">
                      Hair dressing service
                    </Text>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderControl className="xx:right-4 lg:right-0" isLeft={false} ref={nextRef} />
      </div>
    </div>
  );
};

export default TestimonialSlides;
