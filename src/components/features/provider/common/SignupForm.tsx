import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import { Input } from 'src/components/atoms/Input';
import Label from 'src/components/atoms/Label/Label';
import { Text } from 'src/components/atoms/Text';

interface Props {
  onContinue: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

interface State {
  email: string;
  address: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  dateOfBirth: string;
}

const INITIAL_STATE: State = {
  email: '',
  address: '',
  lastName: '',
  firstName: '',
  phoneNumber: '',
  dateOfBirth: '',
};

const INITIAL_ERROR: State = { ...INITIAL_STATE };

const SignupForm = ({ onContinue }: Props) => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_ERROR);

  const validateFields = (name: string, value: string) => {
    if (name === 'firstName' && !value) {
      setErrors((prev) => ({ ...prev, [name]: 'First name is required' }));
    } else if (name === 'lastName' && !value) {
      setErrors((prev) => ({ ...prev, [name]: 'Last name is required' }));
    } else if (name === 'email' && !value) {
      setErrors((prev) => ({ ...prev, [name]: 'Email is required' }));
    } else if (name === 'address' && !value) {
      setErrors((prev) => ({ ...prev, [name]: 'Address is required' }));
    } else if (name === 'phoneNumber' && !value) {
      setErrors((prev) => ({ ...prev, [name]: 'Phone number is required' }));
    } else if (name === 'dateOfBirth' && !value) {
      setErrors((prev) => ({ ...prev, [name]: 'Date of birth is required' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;
    validateFields(name, value);
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card
      shadow="medium"
      defaultBorder={false}
      className="mb-16 xx:mt-8 sm:mt-16 bg-white xx:w-full sm:w-11/12 md:w-9/12 mx-auto xx:px-3 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-20"
    >
      <form>
        <div className="mb-5">
          <Label>First Name</Label>
          <Input
            minWidth="100%"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            onFocus={(e) => validateFields(e.target.name, e.target.value)}
            size="large"
            className="mt-2 bg-body-grey"
            error={!!errors.firstName}
          />
          <Text size="sm" appearance="destructive">
            {errors.firstName}
          </Text>
        </div>
        <div className="mb-5">
          <Label>Last Name</Label>
          <Input
            minWidth="100%"
            name="lastName"
            onChange={handleChange}
            onFocus={(e) => validateFields(e.target.name, e.target.value)}
            value={state.lastName}
            size="large"
            className="mt-2 bg-body-grey"
            error={!!errors.lastName}
          />
          <Text size="sm" appearance="destructive">
            {errors.lastName}
          </Text>
        </div>
        <div className="mb-5">
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            value={state.email}
            onFocus={(e) => validateFields(e.target.name, e.target.value)}
            onChange={handleChange}
            minWidth="100%"
            size="large"
            className="mt-2 bg-body-grey"
            error={!!errors.email}
          />
          <Text size="sm" appearance="destructive">
            {errors.email}
          </Text>
        </div>
        <div className="mb-5">
          <Label>Phone Number</Label>
          <Input
            type="tel"
            name="phoneNumber"
            value={state.phoneNumber}
            onFocus={(e) => validateFields(e.target.name, e.target.value)}
            onChange={handleChange}
            minWidth="100%"
            size="large"
            className="mt-2 bg-body-grey"
            error={!!errors.phoneNumber}
          />
          <Text size="sm" appearance="destructive">
            {errors.phoneNumber}
          </Text>
        </div>
        <div className="mb-5">
          <Label>Date of Birth</Label>
          <Input
            type="date"
            name="dateOfBirth"
            value={state.dateOfBirth}
            onFocus={(e) => validateFields(e.target.name, e.target.value)}
            onChange={handleChange}
            minWidth="100%"
            size="large"
            className="mt-2 bg-body-grey"
            error={!!errors.dateOfBirth}
          />
          <Text size="sm" appearance="destructive">
            {errors.dateOfBirth}
          </Text>
        </div>
        <div className="mb-5">
          <Label>Address (Your home address)</Label>
          <Input
            minWidth="100%"
            size="large"
            name="address"
            value={state.address}
            inputType="dropdown"
            onFocus={(e) => validateFields(e.target.name, e.target.value)}
            error={!!errors.address}
            onDropdownChange={(value) => {
              setState((prev) => ({ ...prev, address: value }));
              validateFields('address', value);
            }}
            onChange={(e) => setState((prev) => ({ ...prev, address: e.target.value }))}
            dropdownOptions={[
              {
                label: '33B, Adeola Odeku Street, Lekki, Lagos, Nigeria',
                value: '33B, Adeola Odeku Street, Lekki, Lagos, Nigeria',
              },
              {
                label: '33B, Adeola Odeku Street, Yaba, Lagos, Nigeria',
                value: '33B, Adeola Odeku Street, Yaba, Lagos, Nigeria',
              },
              {
                label: '33, Adeola Odeku Street, Obalende, Lagos, Nigeria',
                value: '33, Adeola Odeku Street, Obalende, Lagos, Nigeria',
              },
              {
                label: '33B, Adeoye Odeku Street, Shomolu, Lagos, Nigeria',
                value: '33B, Adeoye Odeku Street, Shomolu, Lagos, Nigeria',
              },
              {
                label: '33, Adeola Odeku Street, Surulere, Lagos, Nigeria',
                value: '33, Adeola Odeku Street, Surulere, Lagos, Nigeria',
              },
            ]}
            className="mt-2 bg-body-grey"
          />
          <Text size="sm" appearance="destructive">
            {errors.address}
          </Text>
        </div>

        <div className="w-7/12 mx-auto mt-16">
          <Button onClick={onContinue} expanded appearance="primary" size="large">
            Continue
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;
