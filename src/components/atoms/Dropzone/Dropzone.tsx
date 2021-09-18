import classNames from 'classnames';
import React from 'react';
import { useDropzone } from 'react-dropzone';

export interface DropzoneProps {
  onChange?: (fileList: FileList | null, acceptedFiles?: File[]) => void;
  noClick?: boolean;
  noKeyboard?: boolean;
  accept?: string;
  zoneContent: React.ReactNode;
  className?: string;
  noDrag?: boolean;
}

const Dropzone = (props: DropzoneProps) => {
  const {
    noClick = false,
    noDrag = false,
    noKeyboard = false,
    onChange = () => {},
    accept,
    zoneContent,
    className,
  } = props;

  const classes = classNames(
    'flex justify-center items-center my-6 p-6 bg-basic-transparent rounded border border-dashed',
    className
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    accept,
    noClick,
    noKeyboard,
    noDrag,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files, acceptedFiles);
  };

  return (
    <div className={classes}>
      <div {...getRootProps({ className: 'dropzone flex flex-col items-center' })}>
        <input {...getInputProps({ onChange: handleChange })} />
        {zoneContent}
      </div>
    </div>
  );
};

export default Dropzone;
