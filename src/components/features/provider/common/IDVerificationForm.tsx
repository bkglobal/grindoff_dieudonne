import classNames from 'classnames';
import React, { useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { Button } from 'src/components/atoms/Button';
import { Card } from 'src/components/atoms/Card';
import ChipButton from 'src/components/atoms/Chip/ChipButton';
import { Icon } from 'src/components/atoms/Icon';
import Label from 'src/components/atoms/Label/Label';
import { Text } from 'src/components/atoms/Text';
import Modal from 'src/components/molecules/Modal/Modal';

const govIds = [
  'Voters Card',
  'Beauty & Services',
  'Drivers License',
  'International Passport',
  'Residence Permit'
];

interface Props {
  onContinue: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface State {
  governmentId: File | null;
  profilePhoto: File | null;
  typeOfGovernmentIds: string[];
}

const INITIAL_STATE: State = {
  governmentId: null,
  profilePhoto: null,
  typeOfGovernmentIds: []
};

const IDVerificationForm = ({ onContinue }: Props) => {
  const [openUploader, setOpenUploader] = useState(false);
  const [state, setState] = useState<State>(INITIAL_STATE);
  const [fileCategory, setFileCategory] = useState<'' | 'government-id' | 'profile-photo'>('');

  const onCloseUploader = () => setOpenUploader(false);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles: File[], _r: FileRejection[], e) => {
      setState((prev) => ({
        ...prev,
        [(e.target as HTMLInputElement)?.name]: acceptedFiles[0]
      }));
      onCloseUploader();
    }
  });
  return (
    <>
      <Modal open={openUploader} onClose={onCloseUploader} className='p-6'>
        <div
          className='flex w-500 h-80 justify-center items-center my-6 p-6 bg-basic-transparent border border-gray-300 border-dashed'>
          <div {...getRootProps({ className: 'dropzone flex flex-col items-center' })}>
            <input
              {...getInputProps({
                name:
                  fileCategory === 'government-id'
                    ? 'governmentId'
                    : fileCategory === 'profile-photo'
                      ? 'profilePhoto'
                      : ''
              })}
            />
            <div className='w-full h-full flex flex-col items-center'>
              <Icon name='cloud_upload' size={50} className='mb-4' appearance='subtle-dark' />
              <Text weight='normal' size='lg'>
                Upload from file
              </Text>
              <Text onClick={open} size='xs' className='underline cursor-pointer'>
                or click here to upload image
              </Text>
              <Text weight='normal' className='xx:text-xs mt-6' size='sm'>
                PNG or JPG only
              </Text>
            </div>
          </div>
        </div>
      </Modal>

      <Card
        shadow='medium'
        defaultBorder={false}
        className='mb-16 xx:mt-8 sm:mt-16 bg-white xx:w-full sm:w-11/12 md:w-9/12 mx-auto xx:px-3 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-20'
      >
        <div className='w-full'>
          <div className='grid xx:grid-cols- sm:grid-cols-2 gap-4 w-full'>
            <div className='col-span-1 flex flex-col mb-6'>
              <Label>Take profile photo</Label>
              <div className='grid grid-cols-5 gap-4'>
                <Button
                  onClick={() => {
                    setOpenUploader(true);
                    setFileCategory('profile-photo');
                  }}
                  className='dropzone col-span-5'
                  size='large'
                >
                  Upload file or gallery
                </Button>
                {state.profilePhoto && !openUploader && (
                  <div
                    className='bg-primary-lightest col-span-5 flex items-center justify-between -mt-2 py-3 px-4 flex-grow rounded'>
                    <Text className='flex items-center' size='sm' weight='medium'>
                      <strong className='mr-2'>File:</strong> {state.profilePhoto?.name}{' '}
                    </Text>
                    <Button
                      icon='close'
                      size='tiny'
                      className='xx:p-1 xx:h-auto mt-1 ml-4'
                      appearance='transparent'
                      noHovering
                      onClick={() => {
                        setState((prev) => ({ ...prev, profilePhoto: INITIAL_STATE.profilePhoto }));
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className='col-span-1 flex flex-col mb-6'>
              <Label>Take photo of any government issued ID</Label>
              <div className='grid grid-cols-5 gap-4'>
                <Button
                  onClick={() => {
                    setOpenUploader(true);
                    setFileCategory('government-id');
                  }}
                  className='dropzone col-span-5'
                  size='large'
                >
                  Upload file or gallery
                </Button>
                {state.governmentId && !openUploader && (
                  <div
                    className='bg-primary-lightest col-span-5 flex items-center justify-between -mt-2 py-3 px-4 flex-grow rounded'>
                    <Text className='flex items-center' size='sm' weight='medium'>
                      <strong className='mr-2'>File:</strong> {state.governmentId?.name}{' '}
                    </Text>
                    <Button
                      icon='close'
                      size='tiny'
                      className='xx:p-1 xx:h-auto mt-1 ml-4'
                      appearance='transparent'
                      noHovering
                      onClick={() => {
                        setState((prev) => ({ ...prev, governmentId: INITIAL_STATE.governmentId }));
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start mb-6'>
            <Label>Select type of government issued ID</Label>
            <div
              className={classNames(
                'flex items-start gap-2 flex-wrap w-full border bg-body-grey p-2.5 rounded',
                {
                  'h-16': !state.typeOfGovernmentIds.length
                }
              )}
            >
              {state.typeOfGovernmentIds.map((card) => (
                <ChipButton
                  key={card}
                  onClose={() =>
                    setState((prev) => ({
                      ...prev,
                      typeOfGovernmentIds: prev.typeOfGovernmentIds.filter((idCard) => idCard !== card)
                    }))
                  }
                >
                  {card}
                </ChipButton>
              ))}
            </div>
            <div className='flex flex-wrap mt-2'>
              {govIds.map((card) => (
                <Button
                  onClick={() => {
                    setState((prev) => ({
                      ...prev,
                      typeOfGovernmentIds: prev.typeOfGovernmentIds.some((c) => c === card)
                        ? prev.typeOfGovernmentIds.filter((c) => c !== card)
                        : [...prev.typeOfGovernmentIds, card]
                    }));
                  }}
                  key={card}
                  defaultText={!state.typeOfGovernmentIds.some((c) => c === card)}
                  outlined={!state.typeOfGovernmentIds.some((c) => c === card)}
                  className={classNames('mr-4 my-2', {
                    'xx:border-transparent': state.typeOfGovernmentIds.some((c) => c === card)
                  })}
                  appearance='primary'
                >
                  {card}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className='w-7/12 mx-auto mt-16'>
          <Button onClick={onContinue} expanded appearance='primary' size='large'>
            Continue
          </Button>
        </div>
      </Card>
    </>
  );
};

export default IDVerificationForm;
