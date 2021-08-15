import * as React from 'react';

export const LogoIconRegular = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={48} height={54} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.323 15.014C48.464 15.464.103 31.654 0 54l44.21-22.9 3.113-16.086z"
        fill="#14A800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.31 15.084c-.278 1.435-29.983-29.52-38.281-6.608l35.18 22.623 3.1-16.015z"
        fill="#54CF44"
      />
    </svg>
  );
};

export const LogoIconTiny = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={28} height={33} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.347 9.745C28.007 10.013.06 19.67 0 33l25.548-13.66 1.8-9.595z"
      fill="#14A800"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.34 9.787c-.16.856-17.327-17.608-22.122-3.942l20.33 13.495 1.792-9.553z"
      fill="#54CF44"
    />
  </svg>
);

export const LogoIconLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={68} height={83} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M67.298 23.495C68.922 24.18.148 48.892 0 83l62.87-34.954 4.428-24.551z"
      fill="#14A800"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M67.28 23.602c-.396 2.19-42.64-45.056-54.44-10.086l50.03 34.53 4.41-24.444z"
      fill="#54CF44"
    />
  </svg>
);
