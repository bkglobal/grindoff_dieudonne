import React from 'react';
import { Button } from 'src/components/atoms/Button';
import ClockIcon from 'src/components/atoms/Svgs/dashboard/ClockIcon';
import LocationIcon from 'src/components/atoms/Svgs/dashboard/LocationIcon';
import ReplyIcon from 'src/components/atoms/Svgs/dashboard/ReplyIcon';
import SendIcon from 'src/components/atoms/Svgs/dashboard/SendIcon';
import TieIcon from 'src/components/atoms/Svgs/dashboard/TieIcon';
import TinyCreditCardIcon from 'src/components/atoms/Svgs/dashboard/TinyCreditCardIcon';
import { Text } from 'src/components/atoms/Text';
import { Job } from 'src/components/common-types';
import Modal from 'src/components/molecules/Modal/Modal';

interface Props {
  open: boolean;
  onClose: () => void;
  job: Job;
}

const JobDetailsModal = (props: Props) => {
  const { open, onClose, job } = props;

  return (
    <Modal open={open} onClose={onClose} className="w-500 pt-0 pb-16">
      <div className="pt-4 flex justify-between items-center mb-4">
        <Text weight="medium">Job Details</Text>
        <Button appearance="transparent" onClick={onClose} icon="close" />
      </div>
      <div>
        <Text size="sm">{job?.description}</Text>

        <div className="flex flex-col mt-4">
          <div className="flex justify-between items-center py-1.5">
            <Text size="xs" className="flex items-center whitespace-nowrap">
              <ReplyIcon fill="#868686" className="mr-1" /> Request Date:
            </Text>
            <Text size="xs" weight="medium" className="whitespace-nowrap">
              {job?.requestDate}
            </Text>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <Text size="xs" className="flex items-center whitespace-nowrap">
              <ClockIcon fill="#868686" className="mr-1" /> Budget Rate:
            </Text>
            <Text size="xs" weight="medium" className="whitespace-nowrap">
              {job?.budgetRate}
            </Text>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <Text size="xs" className="flex items-center whitespace-nowrap">
              <TieIcon fill="#868686" className="mr-1" /> Job Type:
            </Text>
            <Text size="xs" weight="medium" className="whitespace-nowrap">
              {job?.jobType}
            </Text>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <Text size="xs" className="flex items-center whitespace-nowrap">
              <SendIcon fill="#868686" className="mr-1" /> Posted:
            </Text>
            <Text size="xs" weight="medium" className="whitespace-nowrap">
              {job?.posted}
            </Text>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <Text size="xs" className="flex items-center whitespace-nowrap">
              <LocationIcon fill="#868686" className="mr-1" /> Location:
            </Text>
            <Text size="xs" weight="medium" className="whitespace-nowrap">
              {job?.location}
            </Text>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <Text size="xs" className="flex items-center whitespace-nowrap">
              <TinyCreditCardIcon fill="#868686" className="mr-1" /> Bid Amount:
            </Text>
            <div className="whitespace-nowrap flex items-center pl-6">
            <Text size="xs" weight="medium" className="whitespace-nowrap">
              {job?.bidAmount}
            </Text>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default JobDetailsModal;
