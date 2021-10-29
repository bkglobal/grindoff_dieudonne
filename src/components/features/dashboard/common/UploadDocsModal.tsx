import React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { Icon } from 'src/components/atoms/Icon';
import { Text } from 'src/components/atoms/Text';
import Modal from 'src/components/molecules/Modal/Modal';

interface Props {
  open: boolean;
  onClose: () => void;
  name?: string;
}

const UploadDocsModal = ({ open: openModal, onClose, name }: Props) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles: File[], _r: FileRejection[], _e) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <Modal open={openModal} onClose={onClose} className="p-6 flex flex-col items-center">
      <div className="border-b w-full flex flex-col items-center pb-4">
        <Text className="text-center" weight="medium">
          {name === 'gov' && 'Upload Government issued ID'}
          {name === 'nin' && 'Upload NIN'}
        </Text>
      </div>
      <div className="flex w-500 h-80 justify-center items-center flex-col my-6 p-6 bg-basic-transparent border border-gray-300 border-dashed">
        <div {...getRootProps({ className: 'dropzone flex flex-col items-center' })}>
          <input {...getInputProps({ name })} />
          <div className="w-full h-full flex flex-col items-center">
            <Icon name="cloud_upload" size={50} className="mb-4" appearance="subtle-dark" />
            <Text weight="normal" size="lg">
              Upload from file
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
  );
};

export default UploadDocsModal;
