import classNames from 'classnames';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import Checkbox from 'src/components/atoms/Checkbox/Checkbox';
import ChipButton from 'src/components/atoms/Chip/ChipButton';
import { Icon } from 'src/components/atoms/Icon';
import { Input } from 'src/components/atoms/Input';
import Label from 'src/components/atoms/Label/Label';
import { Text } from 'src/components/atoms/Text';
import Textarea from 'src/components/atoms/Textarea/Textarea';
import Modal from 'src/components/molecules/Modal/Modal';

const services = [
  { id: 1, name: 'Beauty & Services' },
  { id: 2, name: 'Car & Machine Repair' },
  { id: 3, name: 'Home & Home Cleaning' },
  { id: 4, name: 'Home & Office Repair' },
  { id: 5, name: 'Grocery Shopping & Delivery' },
  { id: 6, name: 'Virtual & Online Task' },
  { id: 7, name: 'Food & Drinks Delivery' },
  { id: 8, name: 'Logistics, errands & Messages Services' },
  { id: 9, name: 'Moving Services' },
];

const skillSources = [
  { id: 1, name: 'Self Taught' },
  { id: 2, name: 'Trained by a professional' },
  { id: 3, name: 'Technical Institute' },
  { id: 4, name: 'Polytechnic' },
  { id: 5, name: 'University Education' },
  { id: 6, name: 'No, I’ve not been trained, I’d like to signup for a training' },
];

interface Category {
  id: number;
  name: string;
}

interface Props {
  onContinue: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface State {
  certificate: File | null;
  description: string;
  howYouLearned: string[];
  serviceLocation: string;
  selectedCategories: Category[];
}

interface ErrorState {
  description: string;
  certificate: string;
  howYouLearned: string;
  serviceLocation: string;
  selectedCategries: string;
}

const INITIAL_STATE: State = {
  description: '',
  howYouLearned: [],
  certificate: null,
  serviceLocation: '',
  selectedCategories: [],
};

const INITIAL_ERROR: ErrorState = {
  description: '',
  certificate: '',
  howYouLearned: '',
  serviceLocation: '',
  selectedCategries: '',
};

const BuildServiceProfileForm = ({ onContinue }: Props) => {
  const [openUploader, setOpenUploader] = useState(false);
  const [state, setState] = useState<State>(INITIAL_STATE);
  const [errors, setErrors] = useState<ErrorState>(INITIAL_ERROR);
  const [other, setOther] = useState('');
  const [isOtherCategoryChecked, setIsOtherCategoryChecked] = useState(false);

  const onCloseUploader = () => setOpenUploader(false);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setState((prev) => ({
        ...prev,
        certificate: acceptedFiles[0],
      }));
      onCloseUploader();
    },
  });

  console.log(acceptedFiles);

  const handleSelectService = (svc: Category) => {
    setState((prev) => {
      if (prev.selectedCategories.some((sv) => sv.id === svc.id)) {
        return { ...prev, selectedCategories: prev.selectedCategories.filter((sv) => sv.id !== svc.id) };
      }
      return { ...prev, selectedCategories: [...prev.selectedCategories, svc] };
    });
  };

  const handleOther = () => {
    setIsOtherCategoryChecked((prev) => !prev);
  };

  const handleUnselectService = (svc: Category) => {
    setState((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.filter((sv) => sv.id !== svc.id),
    }));
  };

  const handleAddOtherCategory = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      selectedCategories: [
        ...prev.selectedCategories,
        { id: prev.selectedCategories.length + 1, name: other },
      ],
    }));
    setOther('');
  };

  const validateInputFields = (name: string, value: string) => {
    if (name === 'description' && !value) {
      setErrors((prev) => ({ ...prev, description: 'Description is required' }));
    } else if (name === 'serviceLocation' && !value) {
      setErrors((prev) => ({ ...prev, serviceLocation: 'Service location is required' }));
    } else {
      setErrors(INITIAL_ERROR);
    }
  };

  const validate = () => {
    if (!state.certificate) {
      setErrors((prev) => ({ ...prev, certificate: 'Certificate is required' }));
    } else if (!state.howYouLearned) {
      setErrors((prev) => ({ ...prev, howYouLearned: 'At least one skill is required' }));
    } else if (!state.selectedCategories) {
      setErrors((prev) => ({ ...prev, selectedCategories: 'At least one category is required' }));
    } else {
      setErrors(INITIAL_ERROR);
      return true;
    }
    return false;
  };

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateInputFields(e.target.name, e.target.value);
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      onContinue(e);
    }
  };

  return (
    <Card
      shadow="medium"
      defaultBorder={false}
      className="mb-16 xx:mt-8 sm:mt-16 bg-white xx:w-full sm:w-11/12 md:w-9/12 mx-auto xx:px-3 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-20"
    >
      <form>
        <div className="flex flex-col mb-4">
          <Label>Select the categories of service you want to provide</Label>
          <div
            className={classNames('flex gap-2 flex-wrap border bg-body-grey p-2.5 rounded', {
              'h-12': !state.selectedCategories.length,
            })}
          >
            {state.selectedCategories.map((svc) => (
              <ChipButton key={svc.id} onClose={() => handleUnselectService(svc)}>
                {svc.name}
              </ChipButton>
            ))}
          </div>
          <Text size="sm" appearance="destructive">
            {errors.selectedCategries}
          </Text>
        </div>
        <div className="mb-4 flex xx:flex-wrap sm:flex-nowrap">
          <Text className="whitespace-nowrap" size="sm" weight="medium" appearance="primary">
            Suggested services:
          </Text>
          <div className="flex flex-wrap items-start justify-start">
            {services.map((svc) => (
              <Checkbox
                onChange={() => handleSelectService(svc)}
                checked={state.selectedCategories.some((s) => s.id === svc.id)}
                className="mx-2 my-0.5"
                key={svc.id}
                label={svc.name}
              />
            ))}
            <Checkbox
              onChange={handleOther}
              checked={isOtherCategoryChecked}
              className="mx-2 my-0.5"
              label="Other"
            />
            {isOtherCategoryChecked && (
              <div className="flex items-center mt-1">
                <Input
                  placeholder="Enter other category"
                  minWidth={100}
                  className="w-1/4"
                  value={other}
                  size="tiny"
                  onChange={(e) => setOther(e.target.value)}
                  onClear={() => setOther('')}
                />
                <Button size="tiny" onClick={handleAddOtherCategory} appearance="primary" className="ml-2">
                  Add
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <Label>Describe the services you want to provide</Label>
          <Textarea
            rows={7}
            name="description"
            className="bg-body-grey"
            placeholder="Type your message here..."
            value={state.description}
            onChange={handleInputsChange}
            error={!!errors.description}
            onFocus={(e) => validateInputFields(e.target.name, e.target.value)}
          />
          <Text size="sm" appearance="destructive">
            {errors.description}
          </Text>
        </div>
        <div className="flex mb-4 flex-col">
          <Label>How did you learn your skills</Label>
          <div className="flex flex-wrap">
            {skillSources.map((src) => (
              <Checkbox className="mr-4 my-0.5" key={src.id} label={src.name} />
            ))}
          </div>
          <Text size="sm" appearance="destructive">
            {errors.howYouLearned}
          </Text>
        </div>
        <div className="flex flex-col items-start mb-4">
          <Label>Upload certificates of any training completion (Optional)</Label>
          <div
            onClick={() => setOpenUploader(true)}
            className="flex w-full flex-wrap items-center px-2 border bg-body-grey h-16 rounded cursor-pointer"
          ></div>
          {state.certificate && !openUploader && (
            <div className="bg-primary-lightest flex items-center justify-between py-3 mt-2 px-4 flex-grow rounded w-full">
              <Text className="flex items-center" size="sm" weight="medium">
                <strong className="mr-2">File:</strong> {state.certificate?.name}{' '}
              </Text>
              <Button
                icon="close"
                size="tiny"
                className="xx:p-1 xx:h-auto mt-1 ml-4"
                appearance="transparent"
                noHovering
                onClick={() => {
                  setState((prev) => ({ ...prev, certificate: INITIAL_STATE.certificate }));
                }}
              />
            </div>
          )}
          <Text size="sm" appearance="destructive">
            {errors.certificate}
          </Text>
        </div>

        <div className="flex flex-col w-full">
          <Label>Insert service location</Label>
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="col-span-3 my-auto">
              <Input
                minWidth="100%"
                size="large"
                name="serviceLocation"
                inputType="dropdown"
                value={state.serviceLocation}
                onFocus={(e) => validateInputFields(e.target.name, e.target.value)}
                onDropdownChange={(value) => setState((prev) => ({ ...prev, serviceLocation: value }))}
                onChange={(e) => {
                  validateInputFields(e.target.name, e.target.value);
                  setState((prev) => ({ ...prev, serviceLocation: e.target.value }));
                }}
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
                error={!!errors.serviceLocation}
                className="bg-body-grey"
              />
            </div>
            <Button
              appearance="primary"
              className="col-span-2 my-auto xx:text-xs sm:text-base sm:leading-7 xl:text-lg"
              icon="place"
              size="large"
            >
              Use Current Location
            </Button>
          </div>
          <Text size="sm" appearance="destructive">
            {errors.serviceLocation}
          </Text>
        </div>

        <Modal open={openUploader} onClose={onCloseUploader} className="p-6">
          <div className="flex w-500 h-80 justify-center items-center my-6 p-6 bg-basic-transparent border border-dashed">
            <div {...getRootProps({ className: 'dropzone flex flex-col items-center' })}>
              <input {...getInputProps()} />
              <div className="w-full h-full flex flex-col items-center">
                <Icon name="cloud_upload" size={50} className="mb-4" appearance="subtle-dark" />
                <Text weight="normal" size="lg">
                  Drop your image here
                </Text>
                <Text onClick={open} size="xs" className="underline cursor-pointer">
                  or click here to upload image
                </Text>
                <Text weight="normal" className="xx:text-xs mt-6" size="sm">
                  PNG or JPG only
                </Text>
              </div>
            </div>
          </div>
        </Modal>

        <div className="w-7/12 mx-auto mt-16">
          <Button onClick={handleContinue} expanded appearance="primary" size="large">
            Continue
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default BuildServiceProfileForm;
