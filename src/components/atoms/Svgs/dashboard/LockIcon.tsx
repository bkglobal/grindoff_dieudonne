import * as React from 'react';

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        transform="matrix(-1 0 0 1 24 0)"
        fill="url(#prefix__pattern0)"
        fillOpacity={0.6}
        d="M0 0h24v24H0z"
      />
      <defs>
        <pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <use xlinkHref="#prefix__image0" transform="scale(.00195)" />
        </pattern>
        <image
          id="prefix__image0"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default LockIcon;