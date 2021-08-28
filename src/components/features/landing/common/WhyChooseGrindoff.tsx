import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import { Icon } from 'src/components/atoms/Icon';
import { Text } from 'src/components/atoms/Text';

const cardData = [
  {
    id: 1,
    title: 'Save your Time',
    text: 'We will handle your request and help you accomplish more, everyday.',
    icon: 'schedule',
  },
  {
    id: 2,
    title: 'Safe and convenient',
    text: 'Tasking with Grind is easy, convenient and safe.',
    icon: 'done_all',
  },
  {
    id: 3,
    title: 'Always there for you',
    text: 'Get fast support, whenever you need it.',
    icon: 'alarm_on',
  },
];

const WhyChooseGrindoff = () => {
  return (
    <div className="w-full bg-no-repeat bg-cover bg-why-choose-grindoff relative xx:bg-choose-grindoff lg:bg-center xx:min-h-screen-lg sm:min-h-800">
      <div className="bg-linear flex flex-col xx:justify-end md:justify-between absolute top-0 left-0 xx:min-h-screen-lg sm:min-h-800 w-full bg-gradient-to-b from-dark-lightest to-dark">
        <div
          style={{ maxWidth: '550px' }}
          className="flex flex-col self-end md:my-20 mx-4 xx:mx-auto md:mx-20 xl:mx-32 xx:mb-6"
        >
          <Heading
            size="5xl"
            className="xx:text-center md:text-right mb-3 xx:text-3xl sm:text-3xl md:text-4xl lg:text-5xl lg:font-semibold"
            appearance="white"
          >
            Why Choose Grindoff?
          </Heading>
          <Text appearance="white" size="lg" className="xx:text-center md:text-right xx:text-lg lg:text-xl">
            Choose from the category, request a provider, meet your provider, enjoy the experience
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-3 lg:px-16 xx:pb-10 lg:pb-24">
          {cardData.map((card) => (
            <Card
              className="bg-primary rounded-xl flex px-6 py-8 border-none items-center"
              shadow="medium"
              key={card.id}
            >
              <div style={{ minWidth: '4rem' }} className="w-16">
                <Icon name={card.icon} className="text-white m-auto" size={45} />
              </div>
              <div className="flex flex-col">
                <Text size="lg" appearance="white" weight="semibold">
                  {card.title}
                </Text>
                <Text appearance="white">{card.text}</Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseGrindoff;
