import * as React from 'react';

function DocumentIcon({ fill = '#1A1A1A', stroke, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2H2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-2v.5A1.5 1.5 0 0110.5 4h-5A1.5 1.5 0 014 2.5V2z"
        fill={fill}
        fillOpacity={0.7}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H7a1 1 0 012 0z"
        fill={fill}
        fillOpacity={0.7}
      />
      <rect opacity={0.3} x={6} y={8} width={7} height={2} rx={1} fill={fill} fillOpacity={0.7} />
      <rect opacity={0.3} x={3} y={8} width={2} height={2} rx={1} fill={fill} fillOpacity={0.7} />
      <rect opacity={0.3} x={3} y={12} width={2} height={2} rx={1} fill={fill} fillOpacity={0.7} />
      <rect opacity={0.3} x={6} y={12} width={7} height={2} rx={1} fill={fill} fillOpacity={0.7} />
      <rect opacity={0.3} x={3} y={16} width={2} height={2} rx={1} fill={fill} fillOpacity={0.7} />
      <rect opacity={0.3} x={6} y={16} width={7} height={2} rx={1} fill={fill} fillOpacity={0.7} />
    </svg>
  );
}

export default DocumentIcon;
