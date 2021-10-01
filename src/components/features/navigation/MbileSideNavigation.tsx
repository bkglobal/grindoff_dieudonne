import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Icon } from 'src/components/atoms/Icon';
import { Input } from 'src/components/atoms/Input';
import { Link } from 'src/components/atoms/Link';
import { FullLogo } from 'src/components/atoms/Logo';
import { Text } from 'src/components/atoms/Text';
import { routes, SidenavLink } from './SideNavigation';

const MobileSideNavigation = () => {
  const [openSideNav, setOpenSideNav] = useState<boolean | null>(null);
  const [sideNavLinks, setSideNavLinks] = useState<SidenavLink[]>(routes);
  const router = useRouter();

  useEffect(() => {
    setSideNavLinks((prev) =>
      prev.map((link) => {
        if (link.link === router?.pathname) {
          return { ...link, isActive: true };
        }
        return { ...link, isActive: false };
      })
    );
  }, [router.pathname]);

  const sidenavClasses = classNames({
    ['h-full fixed left-0 top-0 bottom-0 bg-body-grey w-full bg-white shadow-lg z-10 md:hidden overflow-auto']: true,
    ['transition-all']: openSideNav,
  });

  return (
    <>
      <span onClick={() => setOpenSideNav(true)} className="-ml-1 px-2 mt-2 md:hidden">
        <Icon name="menu" size={22} />
      </span>
      {openSideNav && (
        <div className={sidenavClasses}>
          <div className="w-full shadow py-3 px-4 sticky top-0 left-0 z-20 bg-white">
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

          <form className="w-full py-6 px-4 flex">
            <Input icon="search" className="bg-body-grey" size="regular" placeholder="Search" />
          </form>
          <div className="p-4 bg-white overflow-auto">
            <nav className="">
              {sideNavLinks.map(({ icon: Icon, isActive, ...route }) => (
                <Link
                  href={route.link}
                  key={route.id}
                  decorated={false}
                  className="flex items-center px-4 py-4 hover:bg-body-grey cursor-pointer"
                >
                  <span className="w-9">
                    <Icon fill={isActive ? '#14A800' : '#1A1A1A'} />
                  </span>
                  <Text appearance={isActive ? 'primary' : 'default'} weight="normal" className="xx:text-sm">
                    {route.text}
                  </Text>
                </Link>
              ))}
            </nav>

            <div className="self-end flex justify-center items-center py-3 w-full bg-primary-lightest">
              <Icon name="logout" className="mr-2" appearance="primary" /> Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSideNavigation;
