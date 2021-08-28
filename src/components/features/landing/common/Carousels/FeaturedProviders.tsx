import React, { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SliderControl from 'src/components/atoms/SlideControl/SlideControl';
import ProviderCard from 'src/components/molecules/ProviderCard/ProviderCard';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const items = [
  {
    id: 1,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-1.jpg',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
  {
    id: 2,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-2.jpg',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
  {
    id: 3,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-3.jpg',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
  {
    id: 4,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-4.png',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
  {
    id: 5,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-1.jpg',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
  {
    id: 6,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-3.jpg',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
  {
    id: 7,
    name: 'Alabaster Stores',
    reviews: '100% positive reviews',
    description: 'Experienced Provider I am a professional grocery manager looking to keep busy.',
    avatar: '/assets/home/avatar-4.png',
    accomplishment: '140 completed tasks',
    services: [
      {
        id: 1,
        name: 'Grocery Shopping',
        rate: 'N500/hr',
      },
      {
        id: 2,
        name: 'Home Delivery',
        rate: 'N500/hr',
      },
      {
        id: 3,
        name: 'Food and Drinks supply',
        rate: 'N500/hr',
      },
    ],
  },
];

const FeaturedProviders = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <div className="flex justify-center w-full items-center">
      <div className="flex flex-row w-full relative">
        <Swiper
          onInit={(swiper) => {
            (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
            (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={16}
          slidesPerView={4.2}
          className="p-4 px-3 lg:px-16"
          breakpoints={{
            '100': {
              slidesPerView: 1.1,
            },
            '415': {
              slidesPerView: 2.1,
            },
            '769': {
              slidesPerView: 3.2,
            },
            '1025': {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SliderControl className="xx:left-4 lg:left-10" isLeft ref={prevRef} />
          {items.map((provider) => (
            <SwiperSlide className="shadow-md" key={provider.id}>
              <ProviderCard provider={provider} />
            </SwiperSlide>
          ))}
          <SliderControl className="xx:right-4 lg:right-10" isLeft={false} ref={nextRef} />
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProviders;
