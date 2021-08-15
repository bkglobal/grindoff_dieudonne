import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Icon } from 'src/components/atoms/Icon';
import { Link } from 'src/components/atoms/Link';
import { FullLogo, LogoIcon } from 'src/components/atoms/Logo';
import OutsideClick from 'src/components/atoms/OutsideClick/OutsideClick';
import styled from 'styled-components';
import Services from '../Dropdowns/Services';

const Nav = styled.nav``;

const PageNavigation = () => {
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="w-full shadow py-3">
      <div className="px-3 lg:px-16 flex justify-between">
        <div className="flex items-center">
          <span className="-ml-2 px-2 mt-2 md:hidden">
            <Icon name="menu" size={22} />
          </span>
          <div className="hidden lg:block">
            <FullLogo size="regular" />
          </div>
          <div className="md:block lg:hidden">
            <FullLogo size="tiny" />
          </div>
        </div>

        <div className="flex-grow flex justify-end">
          <Nav className="hidden md:flex items-center justify-end flex-grow border-r border-basic my-1">
            <Link className="mx-3" decorated={false} href="/">
              About Grindoff
            </Link>
            <Link className="mx-3 relative flex justify-items-center" decorated={false} href="/">
              <OutsideClick onOutsideClick={() => setShowServices(false)}>
                <span onClick={() => setShowServices((prev) => !prev)} className="flex items-center">
                  Services
                  <Icon size={22} name="keyboard_arrow_down" />
                </span>
              </OutsideClick>
              <Services open={showServices} onClose={() => setShowServices(false)} />
            </Link>
            <Link className="mx-3 mr-5" decorated={false} href="/">
              Sign In
            </Link>
          </Nav>
          <div className="ml-5 flex items-center">
            <Link className="mx-3 mr-5 md:hidden text-sm md:text-lg" decorated={false} href="/">
              Sign In
            </Link>
            <Button
              size="regular"
              className="mr-2 hidden md:flex"
              radius="pill"
              outlined
              appearance="primary"
            >
              Become a Provider
            </Button>
            <Button className="ml-2 text-sm md:text-md" radius="pill" appearance="primary">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageNavigation;
