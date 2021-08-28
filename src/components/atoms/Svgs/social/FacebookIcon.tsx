import * as React from 'react';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.531 0H2.344A2.344 2.344 0 000 2.344V19.53a2.344 2.344 0 002.344 2.344h6.701v-7.437H5.97v-3.5h3.076V8.27c0-3.035 1.807-4.711 4.574-4.711 1.325 0 2.711.236 2.711.236v2.978h-1.527c-1.504 0-1.973.934-1.973 1.892v2.273h3.358l-.537 3.5H12.83v7.437h6.701a2.343 2.343 0 002.344-2.344V2.344A2.344 2.344 0 0019.531 0z"
        fill="#14A800"
      />
    </svg>
  );
}

export default FacebookIcon;
