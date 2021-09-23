import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { Input } from 'src/components/atoms/Input';
import { Text } from 'src/components/atoms/Text';
import Label from 'src/components/atoms/Label/Label';
import { Link } from 'src/components/atoms/Link';
import { FullLogo } from 'src/components/atoms/Logo';
import { Heading } from 'src/components/atoms/Heading';

const LoginPage = () => {
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
        <div className="xx:hidden lg:flex justify-end -mr-2">
          <div className="hidden lg:block">
            <FullLogo size="regular" />
          </div>
          <div className="md:block lg:hidden">
            <FullLogo size="tiny" />
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-between items-center">
          <form className="xx:w-full md:w-500 lg:w-full xx:mt-10 sm:mt-28">
            <Heading size="2xl" className="mb-10" appearance="primary">
              Login
            </Heading>

            <div className="mb-5">
              <Label>Email or Phone Number</Label>
              <Input type="email" minWidth="100%" size="large" className="mt-2 bg-body-grey" />
            </div>
            <div className="mb-5">
              <Label>Password</Label>
              <Input minWidth="100%" type="password" size="large" className="mt-2 bg-body-grey" />
            </div>
            <div className="flex justify-end">
              <Link href="/forgot-password" appearance="primary">
                Forgot Password?
              </Link>
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log('logged In');
              }}
              expanded
              appearance="primary"
              size="large"
              className="mt-6 xx:border-none"
            >
              Login
            </Button>
          </form>
          <Text size="sm">
            Don’t have an account?{' '}
            <Link href="/become-a-provider?step=signup" appearance="primary">
              Sign Up
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
