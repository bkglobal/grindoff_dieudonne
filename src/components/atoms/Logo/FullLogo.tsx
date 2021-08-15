import React from 'react';
import Link from 'next/link';

import { FullLogoIconLarge, FullLogoIconRegular, FullLogoIconTiny } from '../Svgs/logos/FullLogoIcon';
import { BaseLogoProps } from './types';

const FullLogo = (props: BaseLogoProps) => {
  const { size = 'regular', href = '/' } = props;

  return (
    <Link href={href}>
      <a>
        {size === 'tiny' && <FullLogoIconTiny />}
        {size === 'regular' && <FullLogoIconRegular />}
        {size === 'large' && <FullLogoIconLarge />}
      </a>
    </Link>
  );
};

export default FullLogo;
