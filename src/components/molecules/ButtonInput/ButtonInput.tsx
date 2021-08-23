import React from 'react'
import { Button } from 'src/components/atoms/Button';
import Input, { InputProps } from 'src/components/atoms/Input/Input'

interface ButtonInputProps extends InputProps {
  buttonPosition?: 'right' | 'left';
  buttonContent?: React.ReactNode;
}

const ButtonInput = (props: ButtonInputProps) => {
  const { buttonPosition, buttonContent, ...rest } = props;
  
  return (
    <div className="flex rounded-lg">
      <Input size="large" outline={false} className="rounded-l-lg rounded-r-none" {...rest} />
      <Button radius="pill" size="large" appearance="primary" className="rounded-l-none outline-none">
        Search
      </Button>
    </div>
  );
};

export default ButtonInput
