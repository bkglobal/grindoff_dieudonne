import React from 'react';
import Avatar from 'react-avatar';
import { Icon } from 'src/components/atoms/Icon';
import { Input } from 'src/components/atoms/Input';
import { Link } from 'src/components/atoms/Link';
import { SMGrindoffIcon } from 'src/components/atoms/Logo/dashboard';
import { Text } from 'src/components/atoms/Text';

const HeaderNavigation = () => {
  return (
    <div className="flex items-center justify-between xx:h-14 md:h-20 bg-white xx:px-3 md:px-6">
      <div className="flex">
        <span className="-ml-1 px-1 mt-2 md:hidden">
          <Icon name="menu" size={22} />
        </span>
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
          <span className="xx:mx-4 sm:mx-6">
            <Icon name="notifications" />
          </span>
          <div className="flex items-center">
            <div className="bg-body-grey p-0.5 rounded-full">
              <Avatar src="/assets/home/avatar-2.jpg" size="35px" round name="Olaniyan Saheed" />
            </div>
            <Text size="sm" className="xx:text-xs sm:text-sm mx-1">
              Olaniyan Saheed
            </Text>
            <Icon name="keyboard_arrow_down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
