import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { Link } from 'src/components/atoms/Link';
import { GridoffLogo } from 'src/components/atoms/Logo/dashboard';
import AccountIcon from 'src/components/atoms/Svgs/dashboard/AccountIcon';
import BillingInfoIcon from 'src/components/atoms/Svgs/dashboard/BillingInfoIcon';
import DashboardIcon from 'src/components/atoms/Svgs/dashboard/DashboardIcon';
import HistoryIcon from 'src/components/atoms/Svgs/dashboard/HistoryIcon';
import IncomeIcon from 'src/components/atoms/Svgs/dashboard/IncomeIcon';
import LockIcon from 'src/components/atoms/Svgs/dashboard/LockIcon';
import ReferralsIcon from 'src/components/atoms/Svgs/dashboard/ReferralsIcon';
import SupportIcon from 'src/components/atoms/Svgs/dashboard/SupportIcon';
import WalletIcon from 'src/components/atoms/Svgs/dashboard/WalletIcon';
import { Text } from 'src/components/atoms/Text';

export interface SidenavLink {
  id?: number;
  link: string;
  isActive: boolean;
  text: string;
  icon: ({ stroke, fill, ...rest }: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const routes = [
  { id: 1, link: '/dashboard', text: 'Dashboard', icon: DashboardIcon, isActive: true },
  { id: 2, link: '/dashboard/history', text: 'History', icon: HistoryIcon, isActive: false },
  { id: 3, link: '/dashboard/account', text: 'Account', icon: AccountIcon, isActive: false },
  { id: 4, link: '/dashboard/income', text: 'Income', icon: IncomeIcon, isActive: false },
  { id: 5, link: '/dashboard/referrals', text: 'Referrals', icon: ReferralsIcon, isActive: false },
  {
    id: 6,
    link: '/dashboard/billing-information',
    text: 'Billing Information',
    icon: BillingInfoIcon,
    isActive: false,
  },
  { id: 7, link: '/dashboard/wallet', text: 'Wallet', icon: WalletIcon, isActive: false },
  { id: 8, link: '/dashboard/change-password', text: 'Change Password', icon: LockIcon, isActive: false },
  { id: 9, link: '/dashboard/support', text: 'Support', icon: SupportIcon, isActive: false },
];

const SideNavigation = () => {
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

  return (
    <div
      className="hidden md:flex flex-col bg-white w-300 px-6 py-4"
      style={{ boxShadow: '6px 0px 10px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex items-center">
        <GridoffLogo />
      </div>

      <nav className="flex flex-col mt-8">
        {sideNavLinks.map(({ icon: Icon, isActive, ...route }) => (
          <Link
            href={route.link}
            key={route.id}
            decorated={false}
            className="flex items-center px-2 py-3 hover:bg-body-grey cursor-pointer"
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
    </div>
  );
};

export default SideNavigation;
