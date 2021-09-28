import * as React from 'react';

function HistoryIcon({ fill = '#1A1A1A', stroke, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={21} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.464 6.962a.5.5 0 01.499-.462h.085a.5.5 0 01.497.45L11 11.5l3.248 1.856a.5.5 0 01.252.434v.055a.5.5 0 01-.632.483l-4.47-1.22a.5.5 0 01-.366-.52l.432-5.626z"
        fill={fill}
        fillOpacity={0.7}
      />
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.201.42a.5.5 0 00-.87.205l-1.128 4.73a.5.5 0 00.515.616l4.867-.276a.5.5 0 00.354-.82l-1.19-1.42a8.495 8.495 0 012.751-.454A8.5 8.5 0 112 11.5c0-.788.107-1.56.315-2.302L.389 8.66C.136 9.563 0 10.516 0 11.501 0 17.3 4.701 22 10.5 22S21 17.3 21 11.5C21 5.7 16.299 1 10.5 1c-1.459 0-2.848.297-4.11.835L5.2.419z"
        fill={fill}
        fillOpacity={0.7}
      />
    </svg>
  );
}

export default HistoryIcon;
