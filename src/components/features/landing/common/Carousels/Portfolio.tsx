import React, { RefObject } from 'react';
import SliderControl from 'src/components/atoms/SlideControl/SlideControl';
import { Text } from 'src/components/atoms/Text';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  justify-items: center;
  width: 100%;

  .carousel {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const items = [
  {
    id: 1,
    before: '/assets/home/before-change.jpg',
    after: '/assets/home/after-change.jpg',
  },
  {
    id: 2,
    before: '/assets/home/before-change.jpg',
    after: '/assets/home/after-change.jpg',
  },
  {
    id: 3,
    before: '/assets/home/before-change.jpg',
    after: '/assets/home/after-change.jpg',
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const refs = items.reduce((acc: { [key: number]: RefObject<HTMLDivElement> }, _val: any, i: number) => {
    acc[i] = React.createRef();
    return acc;
  }, {} as { [key: number]: RefObject<HTMLDivElement> });

  const scrollToItem = (i: number) => {
    setCurrentIndex(i);
    refs[i]?.current?.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  const totalImages = items.length;

  const nextItem = () => {
    if (currentIndex >= totalImages - 1) {
      scrollToItem(0);
    } else {
      scrollToItem(currentIndex + 1);
    }
  };

  const previousItem = () => {
    if (currentIndex === 0) {
      scrollToItem(totalImages - 1);
    } else {
      scrollToItem(currentIndex - 1);
    }
  };

  return (
    <CarouselWrapper>
      <div className="flex justify-center w-screen items-center">
        <div className="relative w-screen">
          <div className="carousel inline-flex overflow-x-hidden">
            <SliderControl onClick={previousItem} className="xx:left-4 lg:left-10" isLeft />
            {items.map((item, i) => (
              <div className="w-full flex flex-shrink-0" key={item.id} ref={refs[i]}>
                <div className="flex w-full">
                  <div className="flex flex-col h-full w-1/2 items-center">
                    <Text appearance="destructive" weight="semibold" size="lg">
                      Before
                    </Text>
                    <div className="relative h-full w-full">
                      <div className="w-full h-full absolute bg-destructive-transparent" />
                      <img src={item.before} className="object-cover object-center" width="100%" />
                    </div>
                  </div>
                  <div className="flex flex-col h-full w-1/2 items-center">
                    <Text appearance="success" weight="semibold" size="lg">
                      After
                    </Text>
                    <div className="relative h-full w-full">
                      <div className="w-full h-full absolute bg-primary-light" />
                      <img src={item.after} className="object-cover  object-center" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <SliderControl onClick={nextItem} className="xx:right-4 lg:right-10" isLeft={false} />
          </div>
        </div>
      </div>
    </CarouselWrapper>
  );
};

export default Portfolio;
