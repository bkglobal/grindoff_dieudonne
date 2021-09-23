import React from 'react';
import { Text } from 'src/components/atoms/Text';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className="grid grid-cols-5 m-0 bg-white w-full p-0">
      <div className="xx:col-span-5 lg:col-span-3 m-0 p-0 bg-auth-image xx:h-44 xs:h-52 sm:h-80 lg:h-screen bg-cover bg-center bg-no-repeat">
        <div className="flex items-end h-full w-full justify-start bg-overlay">
          <div className="w-full h-2/3 bg-gradient-to-b from-dark-lightest to-dark flex items-end xx:px-4 sm:px-10 py-14">
            <Text
              appearance="white"
              size="xl"
              weight="medium"
              className="xx:w-full sm:w-3/4 xx:text-lg sm:text-xl lg:text-2xl"
            >
              Get the Job done and get paid seamlessly for your effort with GrindOff
            </Text>
          </div>
        </div>
      </div>
      <div className="xx:col-span-5 lg:col-span-2 flex flex-col min-h-full bg-grey m-0 p-4 sm:px-32 lg:px-24">
        {children}
      </div>
    </div>
  );
};

export default Layout;
