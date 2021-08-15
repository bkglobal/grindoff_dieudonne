import React from 'react';
import Link from 'next/link';

import { LogoIconLarge, LogoIconRegular, LogoIconTiny } from '../Svgs/logos/LogoIcon';
import { BaseLogoProps } from './types';

const LogoIcon = (props: BaseLogoProps) => {
  const { size = 'regular', href = '/' } = props;

  return (
    <Link href={href}>
      <a>
        {size === 'tiny' && <LogoIconTiny />}
        {size === 'regular' && <LogoIconRegular />}
        {size === 'large' && <LogoIconLarge />}
      </a>
    </Link>
  );
};

export default LogoIcon;
