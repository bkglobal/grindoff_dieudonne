import classNames from 'classnames';
import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Icon } from 'src/components/atoms/Icon';
import { FullLogo } from 'src/components/atoms/Logo';
import AboutGrindOffIcon from 'src/components/atoms/Svgs/AboutGrindOffIcon';
import CareersIcon from 'src/components/atoms/Svgs/CareersIcon';
import FaqIcon from 'src/components/atoms/Svgs/FaqIcon';
import HelpIcon from 'src/components/atoms/Svgs/HelpIcon';
import ServicesIcon from 'src/components/atoms/Svgs/ServicesIcon';

const Sidenav = () => {
  const [openSideNav, setOpenSideNav] = useState<boolean | null>(null);

  const sidenavClasses = classNames({
    ['h-full fixed left-0 top-0 bottom-0 w-full bg-white shadow-lg z-10']: true,
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
            <Button expanded size="large" outlined appearance="primary">
              Become a Provider
            </Button>

            <nav className="mt-10">
              <span className="flex items-center p-4 px-3">
                <AboutGrindOffIcon className="mr-4" /> About Grindoff
              </span>
              <span className="flex items-center p-4 px-3">
                <ServicesIcon className="mr-4" /> Services
              </span>
              <span className="flex items-center p-4 px-3">
                <CareersIcon className="mr-4" /> Careers
              </span>
              <span className="flex items-center p-4 px-3">
                <FaqIcon className="mr-4" /> FAQs
              </span>
              <span className="flex items-center p-4 px-3">
                <HelpIcon className="mr-4" /> Help
              </span>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidenav;
