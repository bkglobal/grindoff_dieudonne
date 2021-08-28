import classNames from 'classnames';
import React from 'react';
import { BaseProps } from 'src/components/common-types';
import { Card } from '../Card';
import { Link } from '../Link';
import AppleIcon from '../Svgs/AppleIcon';
import GooglePlayIcon from '../Svgs/GooglePlayIcon';
import { Text } from '../Text';

export interface PlayStoreCTAProps extends BaseProps {
  appearance?: 'white' | 'black';
  store?: 'google' | 'apple';
  mobileAlign?: 'start' | 'center';
  href?: string;
}

const PlayStoreCTA = ({
  appearance = 'white',
  store = 'google',
  className,
  mobileAlign = 'center',
  href = '#'
}: PlayStoreCTAProps) => {
  const classes = classNames(
    {
      'xx:py-4 xx:px-8 sm:p-2 md:py-4 md:px-8 rounded-xl shadow-none border border-primary-light flex flex-nowrap items-center sm:justify-start': true,
      [`xx:bg-${appearance}`]: appearance,
      [`xx:justify-${mobileAlign}`]: mobileAlign,
    },
    className
  );

  return (
    <Link href={href} decorated={false}>
      <Card defaultBorder={false} className={classes}>
        {store === 'google' && (
          <>
            <GooglePlayIcon />
            <div className="flex flex-col ml-4">
              <Text size="sm" appearance={appearance === 'black' ? 'white' : 'default'}>
                Get it on
              </Text>
              <Text
                weight="bold"
                appearance={appearance === 'black' ? 'white' : 'default'}
                className="sm:text-base md:text-lg"
              >
                Google Play
              </Text>
            </div>
          </>
        )}
        {store === 'apple' && (
          <>
            <AppleIcon fill={appearance === 'black' ? '#ffffff' : '#1A1A1A'} />
            <div className="flex flex-col ml-4">
              <Text size="sm" appearance={appearance === 'black' ? 'white' : 'default'}>
                Get it on
              </Text>
              <Text
                weight="bold"
                appearance={appearance === 'black' ? 'white' : 'default'}
                className="sm:text-base md:text-lg"
              >
                Apple Store
              </Text>
            </div>
          </>
        )}
      </Card>
    </Link>
  );
};

export default PlayStoreCTA;
