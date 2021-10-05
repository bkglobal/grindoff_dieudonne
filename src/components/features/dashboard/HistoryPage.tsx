import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import { Heading } from 'src/components/atoms/Heading';
import Pagination from 'src/components/atoms/Pagination';
import ClockIcon from 'src/components/atoms/Svgs/dashboard/ClockIcon';
import LocationIcon from 'src/components/atoms/Svgs/dashboard/LocationIcon';
import ReplyIcon from 'src/components/atoms/Svgs/dashboard/ReplyIcon';
import SendIcon from 'src/components/atoms/Svgs/dashboard/SendIcon';
import TieIcon from 'src/components/atoms/Svgs/dashboard/TieIcon';
import TinyCreditCardIcon from 'src/components/atoms/Svgs/dashboard/TinyCreditCardIcon';
import { Text } from 'src/components/atoms/Text';
import { Job } from 'src/components/common-types';
import JobDetailsModal from './common/JobDetailsModal';
import { jobs } from './data';

const HistoryPage = () => {
  const [isJobDetailOpen, setIsJobDetailOpen] = useState(false);
  const [selectedJob, setselectedJob] = useState<Job | null>(null);

  const handleViewJob = (job: Job) => {
    setselectedJob(job);
  };

  return (
    <>
      <JobDetailsModal
        job={selectedJob as Job}
        onClose={() => setIsJobDetailOpen(false)}
        open={isJobDetailOpen}
      />
      <div className="flex flex-col xx:px-5 lg:px-6">
        <header className="border-b flex justify-between items-baseline">
          <Heading size="5xl" className="mb-3 mt-8 xx:text-3xl sm:text-3xl lg:font-medium">
            History
          </Heading>

          <Button appearance="primary" className="xx:border-transparent" icon="filter_alt">
            Filter
          </Button>
        </header>

        <div className="xx:py-5 lg:py-6 grid xx:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="pb-5 px-0 border-none" shadow="medium">
              <div className="w-full h-12 mb-4 px-4 bg-basic-lightest flex items-center">
                <Text appearance="subtle" size="sm">
                  Wed June 30, 2021
                </Text>
              </div>
              <div className="flex justify-between items-end mb-3 px-4">
                <Text weight="medium" size="sm">
                  {job.title}
                </Text>
              </div>

              <div className="flex flex-col px-4">
                <div className="flex justify-between items-center py-1.5">
                  <Text size="xs" className="flex items-center whitespace-nowrap">
                    <ReplyIcon fill="#868686" className="mr-1" /> Request Date:
                  </Text>
                  <Text size="xs" weight="medium" className="whitespace-nowrap">
                    {job.requestDate}
                  </Text>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <Text size="xs" className="flex items-center whitespace-nowrap">
                    <ClockIcon fill="#868686" className="mr-1" /> Budget Rate:
                  </Text>
                  <Text size="xs" weight="medium" className="whitespace-nowrap">
                    {job.budgetRate}
                  </Text>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <Text size="xs" className="flex items-center whitespace-nowrap">
                    <TieIcon fill="#868686" className="mr-1" /> Job Type:
                  </Text>
                  <Text size="xs" weight="medium" className="whitespace-nowrap">
                    {job.jobType}
                  </Text>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <Text size="xs" className="flex items-center whitespace-nowrap">
                    <SendIcon fill="#868686" className="mr-1" /> Posted:
                  </Text>
                  <Text size="xs" weight="medium" className="whitespace-nowrap">
                    {job.posted}
                  </Text>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <Text size="xs" className="flex items-center whitespace-nowrap">
                    <LocationIcon fill="#868686" className="mr-1" /> Location:
                  </Text>
                  <Text size="xs" weight="medium" className="whitespace-nowrap">
                    {job.location}
                  </Text>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <Text size="xs" className="flex items-center whitespace-nowrap">
                    <TinyCreditCardIcon fill="#868686" className="mr-1" /> Bid Amount:
                  </Text>
                  <div className="whitespace-nowrap flex items-center pl-6"></div>
                </div>

                <Button
                  onClick={() => {
                    handleViewJob(job);
                    setIsJobDetailOpen(true);
                  }}
                  className="mt-2 xx:text-xs xx:border-transparent"
                >
                  View Job
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="xx:px-5 lg:px-6 mb-6">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
