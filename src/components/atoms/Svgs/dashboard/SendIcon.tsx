import * as React from 'react';

function SendIcon({ fill = '#14A800', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.088 4.918l10.397-3.465a.467.467 0 01.59.59L8.61 12.44a.467.467 0 01-.863.055L5.564 7.963 1.033 5.781a.467.467 0 01.055-.863z"
        fill={fill}
      />
    </svg>
  );
}

export default SendIcon;
