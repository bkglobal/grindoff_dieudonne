import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Icon } from 'src/components/atoms/Icon';
import { Link } from 'src/components/atoms/Link';
import { FullLogo } from 'src/components/atoms/Logo';
import AboutGrindOffIcon from 'src/components/atoms/Svgs/AboutGrindOffIcon';
import CareersIcon from 'src/components/atoms/Svgs/CareersIcon';
import FaqIcon from 'src/components/atoms/Svgs/FaqIcon';
import HelpIcon from 'src/components/atoms/Svgs/HelpIcon';
import ServicesIcon from 'src/components/atoms/Svgs/ServicesIcon';

const Sidenav = () => {
  const [openSideNav, setOpenSideNav] = useState<boolean | null>(null);
  const router = useRouter();

  const sidenavClasses = classNames({
    ['h-full fixed left-0 top-0 bottom-0 w-full bg-white shadow-lg z-10 md:hidden']: true,
    ['transition-all']: openSideNav,
  });

  return (
    <>
      <span onClick={() => setOpenSideNav(true)} className="-ml-2 px-2 mt-2 md:hidden">
        <Icon name="menu" size={22} />
      </span>
      {openSideNav && (
        <div className={sidenavClasses}>
          <div className="w-full shadow py-3 px-4 sticky top-0 left-0">
            <Button
              onClick={() => setOpenSideNav(false)}
              appearance="transparent"
              size="regular"
              className="float-right text-2xl z-10"
            >
              &times;
            </Button>
            <FullLogo size="tiny" />
          </div>

          <div className="p-4 py-6">
            <Button
              onClick={() => router.push('/become-a-provider?step=signup')}
              expanded
              size="large"
              outlined
              appearance="primary"
            >
              Become a Provider
            </Button>

            <nav className="mt-10">
              <Link
                href="#"
                decorated={false}
                className="flex items-center p-4 px-3 hover:bg-gray-50 focus-within:shadow-spread-info"
              >
                <AboutGrindOffIcon className="mr-4" /> About Grindoff
              </Link>
              <Link
                href="#"
                decorated={false}
                className="flex items-center p-4 px-3 hover:bg-gray-50 focus-within:shadow-spread-info"
              >
                <ServicesIcon className="mr-4" /> Services
              </Link>
              <Link
                href="#"
                decorated={false}
                className="flex items-center p-4 px-3 hover:bg-gray-50 focus-within:shadow-spread-info"
              >
                <CareersIcon className="mr-4" /> Careers
              </Link>
              <Link
                href="#"
                decorated={false}
                className="flex items-center p-4 px-3 hover:bg-gray-50 focus-within:shadow-spread-info"
              >
                <FaqIcon className="mr-4" /> FAQs
              </Link>
              <Link
                href="#"
                decorated={false}
                className="flex items-center p-4 px-3 hover:bg-gray-50 focus-within:shadow-spread-info"
              >
                <HelpIcon className="mr-4" /> Help
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidenav;
