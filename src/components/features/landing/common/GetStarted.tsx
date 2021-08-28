import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';

const GetStarted = () => {
  return (
    <section className="bg-white pt-14 sm:mt-6 md:mt-0 flex items-center flex-col w-full overflow-hidden">
      <header className="flex flex-col items-center max-w-2xl">
        <Heading size="6xl" className="mb-6 text-center text-4xl xx:text-2xl lg:text-3xl">
          Ready to get started?
        </Heading>
      </header>

      <div className="xx:px-4 sm:p-0 flex flex-col sm:flex-row md:mt-16 h-700 sm:h-400 xl:h-600 w-full">
        <div className="xx:mb-4 sm:m-0 w-full sm:w-1/2 relative bg-get-started-1 bg-cover bg-center h-full">
          <div className="absolute left-0 bottom-0 flex flex-col items-center justify-center h-full w-full bg-dark-light">
            <Text size="lg" appearance="white" className="text-center w-80 mb-10">
              Hear that? The sweet sigh of relief. Start geting more done
            </Text>
            <Button outlined appearance="white" className="xl:px-10" size="large">
              Sign up as a User
            </Button>
          </div>
        </div>
        <div className="xx:mb-4 sm:m-0 w-full sm:w-1/2  relative bg-get-started-2 bg-cover bg-center h-full">
          <div className="absolute left-0 bottom-0 flex flex-col items-center justify-center h-full w-full bg-dark-light">
            <Text size="lg" appearance="white" className="text-center w-80 mb-10">
              Grow your own business while saving the day for the busy people
            </Text>
            <Button outlined appearance="white" className="xl:px-10" size="large">
              Become a Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
