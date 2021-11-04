import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Icon } from 'src/components/atoms/Icon';
import { Input } from 'src/components/atoms/Input';
import { Link } from 'src/components/atoms/Link';
import { SMGrindoffIcon } from 'src/components/atoms/Logo/dashboard';
import Notification from 'src/components/atoms/Notification';
import Dropdown from './dropdowns/Dropdown';
import MobileSideNavigation from './MbileSideNavigation';
import { OutsideClick } from 'src/components/atoms/OutsideClick';

const HeaderNavigation = () => {
  const [showAvatarDropdown, setAvatarDropdown] = useState(false);
  const [showNotificationDropdown, setNotificationDropdown] = useState(false);
  return (
    <div
      className="flex items-center justify-between xx:h-14 md:h-20 bg-white xx:px-3 md:px-6"
      style={{ boxShadow: '6px 1px 5px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex z-20">
        <MobileSideNavigation />
        <Link href="/" className="flex md:hidden items-center">
          <SMGrindoffIcon />
        </Link>
        <form className="w-72 hidden md:flex">
          <Input icon="search" className="bg-body-grey" size="tiny" placeholder="Search" />
        </form>
      </div>

      <div className="flex h-full py-3">
        <nav className="hidden lg:flex items-center justify-end flex-grow border-r border-basic my-1 pr-3">
          <Link className="mx-3" size="sm" href="#">
            Create Job
          </Link>
          <Link className="mx-3" size="sm" href="#">
            Wallet
          </Link>
          <Link className="mx-3" size="sm" href="#">
            History
          </Link>
          <Link className="mx-3" size="sm" href="#">
            Account
          </Link>
          <Link className="mx-3" size="sm" href="#">
            Support
          </Link>
        </nav>
        <div className="flex items-center justify-end sm:w-60">
        <span className="relative">
          <OutsideClick
          className="cursor-pointer"
          onClick={() => setNotificationDropdown((prev) => !prev)}
          onOutsideClick={() => setNotificationDropdown(false)}>
            <Notification />
          </OutsideClick>
          <Dropdown open={showNotificationDropdown} onClose={() => setNotificationDropdown(false)} notification />
          </span>
          <span className="relative">
          <OutsideClick
            className="cursor-pointer"
            onClick={() => setAvatarDropdown((prev) => !prev)}
            onOutsideClick={() => setAvatarDropdown(false)}
          >
            <div className="flex items-center">
              <div className="bg-body-grey p-0.5 rounded-full">
                <Avatar src="/assets/home/avatar-2.jpg" size="35px" round name="Olaniyan Saheed" />
              </div>
              <Link size="sm" className="xx:text-xs sm:text-sm mx-1" href="" decorated={false}>
                Olaniyan Saheed
              </Link>
              <Icon name={showAvatarDropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
            </div>
          </OutsideClick>
            <Dropdown open={showAvatarDropdown} onClose={() => setAvatarDropdown(false)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
