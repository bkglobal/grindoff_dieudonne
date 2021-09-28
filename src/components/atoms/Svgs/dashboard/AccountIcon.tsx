import * as React from 'react';

function AccountIcon({ fill = '#1A1A1A', stroke, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path opacity={0.3} d="M9 8a4 4 0 110-8 4 4 0 010 8z" fill={fill} fillOpacity={0.7} />
      <path
        d="M0 17.2C.389 12.426 4.263 10 8.984 10c4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H.727c-.25 0-.747-.54-.726-.8z"
        fill={fill}
        fillOpacity={0.7}
      />
    </svg>
  );
}

export default AccountIcon;
