import classNames from 'classnames';
import React from 'react';
import { Link } from 'src/components/atoms/Link';
import styled from 'styled-components';

const avatarDropdown = [
  {
    name: 'Profile',
    url: '/#profile',
  },
  {
    name: 'Wallet',
    url: '/#wallet',
  },
  {
    name: 'Support',
    url: '/#support',
  },
  {
    name: 'Logout',
    url: '/#logout',
  },
];

const notificationDropdown = [
    {
      name: 'Your provider has arrived',
      url: '/#checkup',
    },
    {
      name: 'Your provider has arrived',
      url: '/#checkup',
    },
    {
      name: 'Your provider has arrived',
      url: '/#checkup',
    },
    {
      name: 'Your provider has arrived',
      url: '/#checkup',
    },
  ];

const DropdownWrapper = styled.div`
  top: 2.4rem;
`;

interface Props {
  open: boolean;
  onClose: () => void;
  notification?: boolean;
}

const Dropdown = ({ open, onClose, notification }: Props) => {
  const classes = classNames({
    ['invisible']: !open,
    ['rounded shadow-md bg-white px-6 py-4 absolute z-50']: true,
  });
  return (
    <DropdownWrapper className={classes}>
      <div className={notification ? "divide-y w-36" : ""}>
        {(notification ? notificationDropdown : avatarDropdown).map((data, i) => (
          <Link size="sm" className={notification ? "py-2 block hover:no-underline" : "py-2 block md:pr-12 md:mr-6"} onClick={onClose} key={i} href={data.url}>
            {data.name}
          </Link>
        ))}
      </div>
    </DropdownWrapper>
  );
};

export default Dropdown;
