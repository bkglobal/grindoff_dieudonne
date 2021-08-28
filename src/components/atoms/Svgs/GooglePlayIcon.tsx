import * as React from 'react';

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={37} height={39} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27.29 25.46c4.69-2.537 8.247-4.47 8.554-4.62.98-.514 1.993-1.873 0-2.929-.644-.332-4.109-2.205-8.555-4.62l-6.163 6.13 6.163 6.039z"
        fill="#FFD900"
      />
      <path
        d="M21.126 19.42L1.502 38.9c.46.06.98-.06 1.594-.393 1.287-.694 14.933-8.032 24.193-13.044l-6.163-6.041z"
        fill="#F43249"
      />
      <path
        d="M21.126 19.42l6.163-6.099S4.476 1.061 3.096.337A2.422 2.422 0 001.472.033l19.654 19.388z"
        fill="#00EE76"
      />
      <path
        d="M21.126 19.421L1.472.034C.674.215 0 .909 0 2.329v34.275c0 1.299.522 2.235 1.502 2.325L21.126 19.42z"
        fill="#00D3FF"
      />
    </svg>
  );
}

export default GooglePlayIcon;
