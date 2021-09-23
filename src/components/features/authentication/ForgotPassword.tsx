import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { Heading } from 'src/components/atoms/Heading';
import { Input } from 'src/components/atoms/Input';
import Label from 'src/components/atoms/Label/Label';
import { FullLogo } from 'src/components/atoms/Logo';
import Layout from './common/Layout';

const ForgotPassword = () => {
  return (
    <Layout>
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
            Forgot password
          </Heading>

          <div className="mb-5">
            <Label>Enter your email and we will send you a link to reset your password.</Label>
            <Input type="email" minWidth="100%" size="large" className="mt-2 bg-body-grey" />
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
            Send
          </Button>
        </form>
        
      </div>
    </Layout>
  );
};

export default ForgotPassword;
