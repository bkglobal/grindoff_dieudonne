import classNames from 'classnames';
import React, { useState } from 'react';
import { Heading } from 'src/components/atoms/Heading';
import { Icon } from 'src/components/atoms/Icon';
import { Link } from 'src/components/atoms/Link';
import { PlayStoreCTA } from 'src/components/atoms/PlayStoreCTA';
import FacebookIcon from 'src/components/atoms/Svgs/social/FacebookIcon';
import InstagramIcon from 'src/components/atoms/Svgs/social/InstagramIcon';
import TwitterIcon from 'src/components/atoms/Svgs/social/TwitterIcon';
import { Text } from 'src/components/atoms/Text';

const Footer = () => {
  const [activeTabs, setActiveTabs] = useState<Array<'discover' | 'company' | 'download'>>([]);

  const navClasses = (tab: 'discover' | 'company' | 'download') =>
    classNames('sm:flex flex-col', {
      ['flex']: activeTabs.includes(tab),
      ['hidden']: !activeTabs.includes(tab),
    });

  const downloadClasses = (tab: 'discover' | 'company' | 'download') =>
    classNames('sm:flex flex-col xx:px-3 xx:py sm:p-0', {
      ['flex']: activeTabs.includes(tab),
      ['hidden']: !activeTabs.includes(tab),
    });

  const handleTabClick = (val: 'discover' | 'company' | 'download') => {
    setActiveTabs((prev) => {
      if (prev.includes(val)) {
        return prev.filter((tab) => tab !== val);
      }
      return [...prev, val];
    });
  };

  return (
    <footer id="footer" className="bg-white w-full flex flex-col sm:px-10 md:px-14 lg:px-40 pt-28">
      <div className="xx:px-3 sm:px-0 xx:flex xx:flex-col sm:grid sm:grid-rows-1 sm:grid-cols-12 xx:pb-4 sm:pb-16 sm:border-b">
        <div className="sm:col-start-1 sm:col-span-3 flex flex-col items-start xx:border-b sm:border-none">
          <div
            onClick={() => handleTabClick('discover')}
            className="xx:h-16 sm:h-auto flex items-center justify-between sm:p-0 xx:w-full sm:w-auto"
          >
            <Heading className="sm:mb-4">Discover</Heading>
            {activeTabs.includes('discover') ? (
              <Icon size={28} className="xx:inline-block sm:hidden" name="keyboard_arrow_up" />
            ) : (
              <Icon size={28} className="xx:inline-block sm:hidden" name="keyboard_arrow_down" />
            )}
          </div>
          <nav className={navClasses('discover')}>
            <Link href="#" className="py-2">
              Become a Tasker
            </Link>
            <Link href="#" className="py-2">
              All Services
            </Link>
            <Link href="#" className="py-2">
              Elite Taskers
            </Link>
            <Link href="#" className="py-2">
              Help
            </Link>
          </nav>
        </div>
        <div className="sm:col-start-4 sm:col-span-3 flex flex-col items-start xx:border-b sm:border-none">
          <div
            onClick={() => handleTabClick('company')}
            className="xx:h-16 sm:h-auto flex items-center justify-between sm:p-0 xx:w-full sm:w-auto"
          >
            <Heading className="sm:mb-4">Company</Heading>
            {activeTabs.includes('company') ? (
              <Icon size={28} className="xx:inline-block sm:hidden" name="keyboard_arrow_up" />
            ) : (
              <Icon size={28} className="xx:inline-block sm:hidden" name="keyboard_arrow_down" />
            )}
          </div>
          <nav className={navClasses('company')}>
            <Link href="#" className="py-2">
              About Us
            </Link>
            <Link href="#" className="py-2">
              Privacy Policy
            </Link>
            <Link href="#" className="py-2">
              Contact Us
            </Link>
            <Link href="#" className="py-2">
              Careers
            </Link>
            <Link href="#" className="py-2">
              FAQs
            </Link>
          </nav>
        </div>
        <div className="sm:col-start-7 sm:col-span-6 flex flex-col items-start xx:border-b sm:border-none ">
          <div
            onClick={() => handleTabClick('download')}
            className="xx:h-16 sm:h-auto flex items-center justify-between sm:p-0 xx:w-full sm:w-auto"
          >
            <Heading className="sm:mb-4">Download Our App</Heading>
            {activeTabs.includes('download') ? (
              <Icon size={28} className="xx:inline-block sm:hidden" name="keyboard_arrow_up" />
            ) : (
              <Icon size={28} className="xx:inline-block sm:hidden" name="keyboard_arrow_down" />
            )}
          </div>
          <div className={downloadClasses('download')}>
            <Text>Tackle your to-do list wherever you are with our Mobile App</Text>
            <div className="flex flex-col w-full sm:grid grid-cols-2 gap-4 py-8">
              <PlayStoreCTA store="google" mobileAlign="start" appearance="black" />
              <PlayStoreCTA store="apple" mobileAlign="start" appearance="black" />
            </div>
          </div>
        </div>
      </div>
      <div className="xx:p-3 sm:px-0 sm:py-10 flex xx:justify-start sm:justify-between flex-col sm:flex-row">
        <Text size="sm" className="xx:mb-3 sm:m-0">
          &copy; 2021 Grindoff
        </Text>
        <span className="flex sm:items-center xx:flex-col sm:flex-row">
          <Text size="sm" className="xx:mb-2 sm:m-0">
            Connect with us:
          </Text>
          <div className="flex items-center">
            <Link href="#" className="xx:pl-0 sm:px-1">
              <InstagramIcon />
            </Link>
            <Link href="#" className="px-1">
              <FacebookIcon />
            </Link>
            <Link href="#" className="px-1">
              <TwitterIcon />
            </Link>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
