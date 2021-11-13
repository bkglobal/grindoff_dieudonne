import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '../../common-types';
import { Text } from 'src/components/atoms/Text';
import { Card } from 'src/components/atoms/Card';
import { Icon } from 'src/components/atoms/Icon';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { NavigationOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderControl from 'src/components/atoms/SlideControl/SlideControl';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export type TQuickActions = {
  icon: string;
  title: string;
};

export interface QuickActionsProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  quickActions: TQuickActions[];
}

export const QuickActions = React.forwardRef<HTMLDivElement, QuickActionsProps>((props, ref) => {
  const { title, className, quickActions, ...rest } = props;
  const nextRef = React.useRef(null);
  const prevRef = React.useRef(null);

  return (
    <Card defaultBorder shadow="light" className=" pb-8 overflow-hidden">
      <Swiper
        onInit={(swiper) => {
          (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
          (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={16}
        slidesPerView={4}
        className="pt-0 px-3 lg:px-3 lg:w-1000 overflow-visible"
        breakpoints={{
          '100': {
            slidesPerView: 3.1,
          },
          '415': {
            slidesPerView: 3.1,
          },
          '769': {
            slidesPerView: 4.2,
          },
          '1025': {
            slidesPerView: 6,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SliderControl className="xx:left-4 lg:-left-2" isLeft icon={'chevron_left'} ref={prevRef} />
        {quickActions.map((action, index) => (
          <SwiperSlide key={index + 1}>
            <span className="pt-8 pb-2 border-none flex flex-col items-center justify-between flex-shrink-0">
              <span className=" bg-primary-lighter rounded-full px-4 py-3">
                <Icon name={action.icon} size={28} appearance="primary" className="mt-1" />
              </span>
              <Text size="sm" className="mt-4">
                {action.title}
              </Text>
            </span>
          </SwiperSlide>
        ))}
        <SliderControl
          className="xx:right-4 lg:-right-2"
          isLeft={false}
          icon={'chevron_right'}
          ref={nextRef}
        />
      </Swiper>
    </Card>
  );
});

QuickActions.displayName = 'QuickActions';

export default QuickActions;
