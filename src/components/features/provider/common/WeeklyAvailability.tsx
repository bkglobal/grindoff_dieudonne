import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import Checkbox from 'src/components/atoms/Checkbox/Checkbox';
import { Icon } from 'src/components/atoms/Icon';
import { Input } from 'src/components/atoms/Input';
import Label from 'src/components/atoms/Label/Label';
import Select from 'src/components/atoms/Select/Select';
import { Text } from 'src/components/atoms/Text';
import Modal from 'src/components/molecules/Modal/Modal';

type Day = {
  id: number;
  day: string;
  time: {
    start: string;
    end: string;
  };
};

type PricingOptions = null | 'fixed' | 'hourly' | 'service';

const weekDays = [
  {
    id: 1,
    day: 'Sunday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
  {
    id: 2,
    day: 'Monday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
  {
    id: 3,
    day: 'Tuesday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
  {
    id: 4,
    day: 'Webnesday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
  {
    id: 5,
    day: 'Thursday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
  {
    id: 6,
    day: 'Friday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
  {
    id: 7,
    day: 'Saturday',
    time: {
      start: '2 am',
      end: '20 pm',
    },
  },
];

const WeeklyAvailability = () => {
  const [openPricingModal, setOpenPricingModal] = useState(false);
  const [activePricing, setActivePricing] = useState<PricingOptions>(null);
  const [availability] = useState<Day[]>([...weekDays]);
  const [activeAvailability, setActiveAvailability] = useState<Day | null>(null);

  const onEdit = (day: Day | null) => {
    setActiveAvailability(day);
  };

  const onClosePricingModal = () => setOpenPricingModal(false);

  const onOpenPricingModal = (pricing: PricingOptions) => {
    setActivePricing(pricing);
    setOpenPricingModal(true);
  };

  const renderFixedOrHourlyRateModalContent = () => (
    <>
      <div className="xx:px-4 sm:px-8 xx:py-3 sm:py-6 border-b flex justify-between">
        <Text weight="medium" size="lg" className="self-end align-baseline">
          {activePricing === 'fixed' && 'Set a Fixed pricing'}
          {activePricing === 'hourly' && 'Set a Hourly pricing'}
          {activePricing === 'service' && 'Service Price'}
        </Text>
        <Button onClick={onClosePricingModal} appearance="transparent" icon="close" />
      </div>
      <div className="xx:px-4 sm:px-8 xx:py-3 sm:py-5">
        <Text className="font-normal" size="sm">
          Please note that fixed price cannot be change when apply to new contracts. The GrindOff Service Fee
          is 20% when you begin a contract with a new client. Once you bill over N200,000 with your client,
          the fee will be 10%.
        </Text>
      </div>
      <div className="xx:px-4 sm:px-8 xx:py-3 sm:py-6 w-full flex items-start xx:flex-col sm:flex-row xx:gap-y-4 sm:gap-y-0 sm:gap-x-12">
        <div className="flex flex-col">
          <Text weight="semibold" className="leading-4">
            {activePricing === 'fixed' && 'Fixed Rate'}
            {activePricing === 'hourly' && 'Hourly Rate'}
            {activePricing === 'service' && 'Service Rate'}
          </Text>
          <Text weight="normal" size="sm">
            Total amount the client will see
          </Text>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <Input
            type="number"
            customIcon="N"
            align="right"
            min={0.0}
            placeholder="0.00"
            // value="0.00"
            minWidth={60}
            className="xx:w-9/12 sm:w-auto appearance-none"
          />
          {activePricing === 'service' && (
            <Select minWidth={30} className="ml-4 w-20">
              <option value=""></option>
              <option value="Sitting room">Sitting room</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Compound">Compound</option>
              <option value="Toilet">Toilet</option>
              <option value="Rooms">Rooms</option>
              <option value="Backyard">Backyard</option>
            </Select>
          )}
          {activePricing === 'hourly' && (
            <Text appearance="subtle" className="ml-2">
              / hr
            </Text>
          )}
          {activePricing === 'service' && (
            <Text appearance="subtle" className="ml-2 whitespace-nowrap">
              / items
            </Text>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      <Modal open={openPricingModal} onClose={onClosePricingModal} className="xx:p-0 w-600">
        {renderFixedOrHourlyRateModalContent()}
        <div className="flex justify-end px-8 py-5">
          <Button
            onClick={onClosePricingModal}
            appearance="transparent"
            className="xx:px-8 xx:border-none focus:outline-none"
            noHovering
          >
            Cancel
          </Button>
          <Button appearance="primary" className="xx:px-8 xx:border-none">
            Save
          </Button>
        </div>
      </Modal>
      <Card
        shadow="medium"
        defaultBorder={false}
        className="mb-16 xx:mt-8 sm:mt-16 bg-white xx:w-full sm:w-11/12 md:w-9/12 mx-auto xx:px-3 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-20"
      >
        <div className="w-full flex flex-col mb-6">
          <Label>Select working days from Monday - Sunday or choose all days</Label>
          <div className="border flex flex-col py-6 px-20">
            <div className="grid grid-cols-5 mb-4">
              <div className="col-span-2">
                <Text className="" weight="normal">
                  Days
                </Text>
              </div>
              <div className="col-span-3">
                <Text weight="normal" size="base">
                  Choose Working time on each days or Choose anytime
                </Text>
              </div>
            </div>
            {availability.map((day: Day, i) => (
              <div key={i} className="grid grid-cols-5 mb-4">
                <div className="col-span-2 my-auto">
                  <Checkbox size="regular" label={day.day} />
                </div>
                {day.id !== activeAvailability?.id && (
                  <div className="col-span-3 my-auto">
                    <Text size="base" weight="normal">
                      {day.time.start} - {day.time.end}
                    </Text>
                    <Icon
                      name="edit"
                      onClick={() => onEdit(day)}
                      className="ml-1 cursor-pointer"
                      appearance="subtle-dark"
                    />
                  </div>
                )}
                {day.id === activeAvailability?.id && (
                  <div className="flex items-center col-span-3 my-auto">
                    <Select minWidth={30}>
                      <option value={day.time.start}>{day.time.start}</option>
                    </Select>
                    <Text weight="normal" size="base" className="mx-2">
                      to
                    </Text>
                    <Select minWidth={30}>
                      <option value={day.time.end}>{day.time.end}</option>
                    </Select>
                    <Text
                      onClick={() => onEdit(null)}
                      appearance="success"
                      size="sm"
                      weight="normal"
                      className="ml-2 cursor-pointer"
                    >
                      Done
                    </Text>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Label>How do you want to charge for your services?</Label>
          <div className="flex flex-col">
            <div className="flex items-center my-2">
              <Checkbox label="Fixed price" />
              <Icon
                name="edit"
                className="ml-3 cursor-pointer"
                onClick={() => onOpenPricingModal('fixed')}
                appearance="subtle-dark"
              />
            </div>
            {/* <div className="flex flex-col w-full">
              <OutsideClick onOutsideClick={() => setShowDiscussPricingBanner(false)}>
                <div className="flex items-center my-2">
                  <Text weight="normal">Discuss pricing </Text>
                  <Icon
                    name="keyboard_arrow_down"
                    onClick={() => setShowDiscussPricingBanner((prev) => !prev)}
                    size={24}
                    className={classNames('ml-1 cursor-pointer transform', {
                      'rotate-180': showDiscussPricingBanner,
                    })}
                    appearance="subtle-dark"
                  />
                </div>
              </OutsideClick>
              {showDiscussPricingBanner && (
                <div className="flex items-center bg-primary py-2 px-8 w-full">
                  <Icon name="info" className="transform rotate-180" appearance="warning-light" size={40} />
                  <Text appearance="white" weight="normal" className="mx-4">
                    Select option:
                  </Text>
                  <Button
                    appearance="primary-dark"
                    className="xx:border-none xx:px-2 xx:leading-6 xx:text-sm xx:h-10"
                  >
                    On GrindOff Platform
                  </Button>
                  <Text appearance="white" weight="normal" className="mx-4">
                    or
                  </Text>
                  <Button
                    appearance="primary-dark"
                    className="xx:border-none xx:px-2 xx:leading-6 xx:text-sm xx:h-10"
                  >
                    On arrival at the job location
                  </Button>
                </div>
              )}
            </div> */}
            <div className="flex items-center my-2">
              <Checkbox label="Service price" />
              <Icon
                name="edit"
                className="ml-3 cursor-pointer"
                onClick={() => onOpenPricingModal('service')}
                appearance="subtle-dark"
              />
            </div>
            <div className="flex items-center my-2">
              <Checkbox label="Hourly price" />
              <Icon
                name="edit"
                className="ml-3 cursor-pointer"
                onClick={() => onOpenPricingModal('hourly')}
                appearance="subtle-dark"
              />
            </div>
          </div>
        </div>
        <div className="w-7/12 mx-auto mt-16">
          <Button expanded appearance="primary" size="large">
            Continue
          </Button>
        </div>
      </Card>
    </>
  );
};

export default WeeklyAvailability;
