import React from 'react';
import { Icon } from '../Icon';

const Notification = ({ count = 0 }) => {
  return (
    <div className="relative xx:mx-4 sm:mx-6">
      <Icon name="notifications" />
      <span
        style={{ fontSize: '0.5rem' }}
        className="text-white font-medium flex items-center justify-center bg-alert w-3 h-3 rounded-full absolute -top-1 -right-1"
      >
        {count}
      </span>
    </div>
  );
};

export default Notification;
