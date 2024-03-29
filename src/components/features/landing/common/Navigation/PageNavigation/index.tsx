import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Icon } from 'src/components/atoms/Icon';
import { Link } from 'src/components/atoms/Link';
import { FullLogo } from 'src/components/atoms/Logo';
import { OutsideClick } from 'src/components/atoms/OutsideClick';
import Services from '../Dropdowns/Services';
import Sidenav from '../Sidenav';

const PageNavigation = () => {
  const [showServices, setShowServices] = useState(false);
  const router = useRouter();

  return (
    <header className="w-full shadow py-3 sticky top-0 bg-white z-20">
      <div className="px-3 lg:px-16 flex justify-between">
        <div className="flex items-center">
          <Sidenav />
          <div className="hidden lg:block">
            <FullLogo size="regular" />
          </div>
          <div className="md:block lg:hidden">
            <FullLogo size="tiny" />
          </div>
        </div>

        <div className="flex-grow flex justify-end">
          <nav className="hidden md:flex items-center justify-end flex-grow border-r border-basic my-1">
            <Link className="mx-3" decorated={false} href="/">
              About Grindoff
            </Link>
            <span className="relative">
              <Link className="mx-3 relative flex justify-items-center" decorated={false} href="/">
                <OutsideClick
                  onClick={() => setShowServices((prev) => !prev)}
                  className="flex items-center"
                  onOutsideClick={() => setShowServices(false)}
                >
                  <>
                    Services
                    <Icon size={22} name="keyboard_arrow_down" />
                  </>
                </OutsideClick>
              </Link>
              <Services open={showServices} onClose={() => setShowServices(false)} />
            </span>
            <Link className="mx-3 mr-5" decorated={false} href="/login">
              Sign In
            </Link>
          </nav>
          <div className="ml-5 flex items-center">
            <Link className="mx-3 mr-5 md:hidden text-sm md:text-lg" decorated={false} href="/login">
              Sign In
            </Link>
            <Button
              size="regular"
              className="mr-2 hidden md:flex"
              radius="pill"
              outlined
              onClick={() => router.push('/become-a-provider?step=signup')}
              appearance="primary"
            >
              Become a Provider
            </Button>
            <Button
              className="ml-2 xx:text-sm xx:leading-4 md:text-md xx:rounded md:rounded-lg xx:border-transparent"
              radius="pill"
              appearance="primary"
              onClick={() => router.push('/become-a-provider?step=signup')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageNavigation;
