import { IconSvgProps } from '@/types/types';

export const IconSendEmail = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1"
    viewBox="0 0 32 32"
    width='1em'
    height='1em'
    {...props}
  >
    <path d="m11 12 10 6 10-6M4 12h7M1 16h11M4 20h7" className="st0" />
    <path
      d="M11 12v-1c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H15c-2.2 0-4-1.8-4-4v-1"
      className="st0"
    />
  </svg>
);

export const IconError = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width='1em'
    height='1em'
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 9v4" />
    <path d="M12 16v.01" />
  </svg>
);

export const IconPlus = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="none"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>
);

export const IconDelete = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="none"
    focusable="false"
    role="presentation"
    viewBox="0 0 20 20"
    height='1em'
    width='1em'
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const IconScrollEmoji = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    width='1em'
    height='1em'
    {...props}
  >
    <g id="color">
      <rect
        x="15.0229"
        y="16.2834"
        width="41.9541"
        height="40.9771"
        fill="#F4AA41"
        stroke="none"
      />
      <polyline
        fill="#E27022"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="16,55.7479 11,55.9479 11,60.9896 61,60.9896 61,53.9479 56,54.1479"
      />
      <polyline
        fill="#E27022"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="56,16.2834 61,16.0834 61,11.0417 11,11.0417 11,18.0834 16,17.8834"
      />
    </g>
    <g id="hair" />
    <g id="skin" />
    <g id="skin-shadow" />
    <g id="line">
      <polyline
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="16,55.7479 11,55.9479 11,60.9896 61,60.9896 61,53.9479 56,54.1479"
      />
      <polyline
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="56,16.2834 61,16.0834 61,11.0417 11,11.0417 11,18.0834 16,17.8834"
      />
      <polyline
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="56,16.2834 34.6258,17.1383 16,17.8834"
      />
      <line
        x1="16"
        x2="56"
        y1="55.7479"
        y2="54.1479"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="16"
        x2="16"
        y1="22.0023"
        y2="50.0603"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="56"
        x2="56"
        y1="22.0023"
        y2="50.0603"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="20.8523"
        x2="31.8614"
        y1="24.9034"
        y2="24.9034"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="20.8523"
        x2="52.019"
        y1="30.1515"
        y2="30.1515"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="20.8523"
        x2="52.019"
        y1="35.3997"
        y2="35.3997"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="20.8523"
        x2="52.019"
        y1="40.6479"
        y2="40.6479"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="20.8523"
        x2="52.019"
        y1="45.896"
        y2="45.896"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export const IconMoonFilled = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const IconSunFilled = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const IconSearch = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);


export const IconFaceAngry = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M328.4 393.5c-9.7 9.1-24.9 8.6-33.9-1.1-7.4-7.9-20.1-16.4-38.5-16.4s-31.1 8.5-38.5 16.4c-9 9.7-24.2 10.2-33.9 1.1-9.7-9-10.2-24.2-1.1-33.9 14.2-15.3 38.9-31.6 73.5-31.6s59.3 16.3 73.5 31.6c9.1 9.7 8.6 24.9-1.1 33.9zM144.4 240c0-8.8 3.5-16.8 9.3-22.6l-30.8-10.2c-8.3-2.8-12.9-11.9-10.1-20.3 2.8-8.3 11.9-12.9 20.3-10.1l96 32c8.3 2.8 12 11.9 10.1 20.3-2.8 8.3-11.9 12-20.3 10.1l-10.8-3.6c.2 1.4.3 2.9.3 4.4 0 17.7-14.4 32-32 32-17.7 0-32-14.3-32-32zm224 0c0 17.7-14.4 32-32 32-17.7 0-32-14.3-32-32 0-1.6.1-3.2.3-4.7l-11.6 3.9c-8.4 1.9-17.5-1.8-20.3-10.1-2.8-8.4 1.8-17.5 10.1-20.3l96-32c8.4-2.8 17.5 1.8 20.3 10.1 1.9 8.4-1.8 17.5-10.1 20.3l-30.2 10c5.8 5.8 9.5 13.9 9.5 22.8zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z"
    />
  </svg>
);


export const IconFaceKissWinkHeart = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M345.3 472.1c2 7.6 5.6 14.3 10.4 19.7-30.6 13-64.3 20.2-99.7 20.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256c0 29.3-4.9 57.4-14 83.7-11.1-5.6-23.5-6.6-36.2-5.1-2.1-5.2-4.8-10-7.9-14.5 6.6-20.2 10.1-41.7 10.1-64.1 0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208c29.4 0 57.5-6.1 82.9-17.2l6.4 25.3zm-56.6-137.8c-4.3 5.2-10.2 9.7-16.8 13.4-2.7 1.6-5.6 3-8.7 4.3 3.1 1.3 6 2.7 8.7 4.3 6.6 2.8 12.5 8.2 16.8 13.4 4.2 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.2 9.7-16.8 13.4-13.2 7.4-30.5 12.3-47.9 12.3-3.6 0-6.8-2.5-7.7-6-1-3.5.6-7.2 3.8-9l.2-.1c.2-.1.5-.3.9-.6.8-.4 2-1.2 3.4-2.1 2.8-1.8 6.6-4.5 10.2-7.6 3.8-3.1 7.2-6.6 9.7-10 1.6-3.6 3.5-6.4 3.5-8.6 0-2.2-1.9-5.9-3.5-8.6-2.5-4.3-5.9-6.9-9.7-10-3.6-3.1-7.4-5.8-10.2-7.6-1.4-.9-2.6-1.7-3.4-2.1-.4-.3-.7-.5-.9-.6l-.2-1c-2.5-.5-4.1-3.2-4.1-6.1 0-2.9 1.6-5.6 4.1-7l.2-.1c.2-.1.5-.3.9-.6.8-.4 2-1.2 3.4-2.1 2.8-1.8 6.6-4.5 10.2-7.6 3.8-3.1 7.2-6.5 9.7-10 1.6-3.6 3.5-6.4 3.5-8.6 0-2.2-1.9-5.9-3.5-8.6-2.5-4.3-5.9-6.9-9.7-10-3.6-3.1-7.4-5.8-10.2-7.6-1.4-.9-2.6-1.7-3.4-2.1-.4-.3-.7-.5-.9-.6l-.2-1c-3.2-.9-4.8-4.6-3.8-9 .9-2.6 4.1-5.1 7.7-5.1 17.4 0 34.7 4.9 47.9 12.3 6.6 2.8 12.5 8.2 16.8 13.4 4.2 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3zM144.4 208c0-17.7 14.3-32 32-32 17.6 0 32 14.3 32 32s-14.4 32-32 32c-17.7 0-32-14.3-32-32zm191.2 12c-11.5 0-19.9 3.8-25.4 9.7-7.5 8-20.2 8.4-28.3.9-8-7.6-8.4-20.2-.9-28.3 14.6-15.5 35.3-22.3 54.6-22.3 18.5 0 40.1 6.8 54.6 22.3 7.6 8.1 7.2 20.7-.9 28.3-8.1 7.5-20.7 7.1-28.3-.9-5.4-5.9-14.7-9.7-25.4-9.7zm103.8 153.3l20.1-5.7c22.2-6.2 45.1 7.6 51.1 30.8 5.9 23.3-7.3 47.2-29.5 53.4l-85 23.8c-8.6 2.4-17.5-2.7-19.8-11.4l-22.9-89.3c-5.9-23.3 7.3-47.2 29.5-53.4 22.3-6.2 45.1 7.6 50.2 30.8l6.3 21z"
    />
  </svg>
);

export const IconFaceGrinSweat = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M464 128c-26.5 0-48-21-48-46.99 0-5 1.8-11.27 4.6-18.14.3-.7.6-1.41 1-2.13 8.9-20.23 26.5-44.88 36-57.459a7.882 7.882 0 0112.8 0C483.4 20.65 512 61.02 512 81.01c0 21.69-14.9 39.79-35.2 45.29-4.1 1.1-8.4 1.7-12.8 1.7zm-72.9-77.47c-3.3 8.04-7.1 19.04-7.1 30.48 0 3.09.3 7.9.9 11.71C349.4 64.71 304.7 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208c0-36.3-9.3-70.5-25.7-100.2 8.1 2.7 16.8 4.2 25.7 4.2 9.6 0 18.8-1.7 27.4-4.8 13.3 31 20.6 65 20.6 100.8 0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0c51.4 0 99.3 15.15 139.4 41.23-1.5 3.09-3 6.2-4.3 9.3zM255.9 399.1c-50.3 0-94.4-24.5-119-62.6-10.4-16.1 6.8-33.4 25.4-28.1 29 6.7 60.5 10.5 93.6 10.5 33.1 0 64.7-3.8 93.6-10.5 18.7-5.3 35.9 12 24.6 28.1-23.7 38.1-67.8 62.6-118.2 62.6zm-38.3-170.3l-.2-.3c-.2-.2-.4-.5-.7-.9-.7-.8-1.6-1.9-2.8-3.3-2.5-2.9-6-6.6-10.2-11.2-8.8-6.9-18.9-13.1-27.7-13.1s-18.9 6.2-27.7 13.1c-4.2 4.6-7.7 8.3-10.2 11.2-1.2 1.4-3 2.5-2.8 3.3-1.2.4-.5.7-.7.9l-.2.3c-2.1 2.8-5.7 3.9-8.9 2.8-3.3-1.1-6.4-4.2-6.4-7.6 0-17.9 7.6-35.6 17.5-48.8 9.8-13 23.9-23.2 38.5-23.2 16.4 0 30.5 10.2 40.3 23.2 9.9 13.2 15.7 30.9 15.7 48.8 0 3.4-1.3 6.5-4.6 7.6-3.2 1.1-6.8 0-8.9-2.8zm160 0l-.2-.3c-.2-.2-.4-.5-.7-.9-.7-.8-1.6-1.9-2.8-3.3-2.5-2.9-6-6.6-10.2-11.2-8.8-6.9-18.9-13.1-27.7-13.1s-18.9 6.2-27.7 13.1c-4.2 4.6-7.7 8.3-10.2 11.2-1.2 1.4-3 2.5-2.8 3.3-1.2.4-.5.7-.7.9l-.2.3c-2.1 2.8-5.7 3.9-8.9 2.8-3.3-1.1-5.5-4.2-5.5-7.6 0-17.9 6.7-35.6 16.6-48.8 9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8 0 3.4-2.2 6.5-5.5 7.6-3.2 1.1-6.8 0-8.9-2.8z"
    />
  </svg>
);

export const IconHatWizard = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M64 416l104.6-235.3c15.3-34.4 40.3-63.5 72-83.7L387.5 3c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5l-59.8 149.2c-1.9 4.7-2.8 9.7-2.8 14.7 0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4c-2.2-6.4-8.3-10.8-15.2-10.8s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5c-6.5 2.2-10.9 8.3-10.9 15.2s4.4 13 10.9 15.2l40.4 13.5 11.8 35.3H64zm215.6-274.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
    />
  </svg>
);

export const IconEmoticonDevilOutline = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.5 2.09c.9.91 2.37 1.64 4.19 2.16A9.92 9.92 0 0112 2c2.39 0 4.59.84 6.31 2.25C20.13 3.73 21.6 3 22.5 2.09c-.03 1.63-.85 3.12-2.22 4.31A9.89 9.89 0 0122 12a10 10 0 01-10 10A10 10 0 012 12c0-2.08.63-4 1.72-5.6C2.35 5.21 1.53 3.72 1.5 2.09M20 12a8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8m-9.5-2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V8.5l3 1.5m6 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5l3-1.5V10M12 17.23c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81z"
    />
  </svg>
);

export const IconExperiment = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    height='1em'
    width='1em'
    focusable="false"
    role="presentation"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="currentColor"
      d="M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"
    />
  </svg>
);

export const IconUKFlag = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
  </svg>
);

export const IconTurkeyFlag = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#d12d24"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M19.807 16L21 14.358 19.069 14.985 17.876 13.342 17.876 15.373 15.945 16 17.876 16.627 17.876 18.658 19.069 17.015 21 17.642 19.807 16z"></path><path d="M15.953,19.325c-1.837,1.65-4.663,1.5-6.314-.337s-1.5-4.663,.337-6.314c1.837-1.65,4.663-1.5,6.314,.337-.442-.699-1.035-1.292-1.734-1.734-2.608-1.65-6.06-.874-7.711,1.734-1.65,2.608-.874,6.06,1.734,7.711,2.608,1.65,6.06,.874,7.711-1.734-.106,.118-.219,.231-.337,.337Z" fill="#fff"></path>
  </svg>
);

export const IconSpainFlag = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill="#f1c142" d="M1 10H31V22H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" fill="#a0251e"></path><path d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24.5)" fill="#a0251e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z" fill="#9b8028"></path><path d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z" fill="#9b8028"></path><path d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z" fill="#9b8028"></path><path d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z" fill="#a0251e"></path>
  </svg>
);


export const IconGlobe = ({
  className,
  ...props
}: IconSvgProps) => (

  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 512 512"
    fill='currentColor'
    {...props}
  >
    <path d="M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 00-4.46-4.65h-71.06a4.43 4.43 0 00-4.47 4.39v55.3a4.44 4.44 0 004.14 4.38 273.51 273.51 0 0159 11.39 4.45 4.45 0 005.54-2.97zM323.58 377.31a260.05 260.05 0 00-46.6-9.09 4.42 4.42 0 00-4.91 4.29v65.24a4.47 4.47 0 006.76 3.7c15.9-9.27 29-24.84 40.84-45.43 1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 00-2.76-6.02zM235.29 368.4a256.85 256.85 0 00-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79 1.79 3.56 4 8.11 5.89 11.51 13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 006.76-3.7v-65.27a4.16 4.16 0 00-4.78-4.08zM235.6 272h-71.06a4.41 4.41 0 00-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 005.59 3 272.2 272.2 0 0159-11.36 4.44 4.44 0 004.15-4.38V276.4a4.43 4.43 0 00-4.48-4.4zM277 143.78a235.8 235.8 0 0046.5-9.14 4.3 4.3 0 002.76-6c-1.79-3.57-4.27-8.68-6.17-12.09-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 00-6.76 3.7v65.23a4.43 4.43 0 004.91 4.3zM276.54 240h71.06a4.39 4.39 0 004.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 00-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 00-4.15 4.32v55.11a4.4 4.4 0 004.47 4.32zM233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 002.76 6 225.42 225.42 0 0046.54 9.17 4.43 4.43 0 004.91-4.29V74.26a4.49 4.49 0 00-6.74-3.7zM235.92 176.26c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 00-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 004.46 4.58h71.06a4.4 4.4 0 004.47-4.34v-55.09a4.4 4.4 0 00-4.15-4.32z" />
    <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM176.6 430.85a219.08 219.08 0 01-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 00-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.29 147.29 0 01-23.57-22.43 248.83 248.83 0 0130.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 01-14.09-82.17 4.36 4.36 0 00-4.3-4.17H66.84a2 2 0 01-2-1.7A98.28 98.28 0 0164 256a96.27 96.27 0 01.86-14.29 2 2 0 012-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.71 372.71 0 0114-81.83 4.36 4.36 0 00-2.19-5.11 260.63 260.63 0 01-29.84-17.9 169.82 169.82 0 0123.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0011-3.42c1.88-3.87 4-8.18 6.06-11.88a221.93 221.93 0 0112.54-19.91A185 185 0 01256 64c28.94 0 55.9 7 80.53 18.46a202.23 202.23 0 0112 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 005.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.36 171.36 0 0123.2 23 244.89 244.89 0 01-29.06 17.31 4.35 4.35 0 00-2.18 5.12 348.68 348.68 0 0113.85 81.4 4.33 4.33 0 004.3 4.12l56.62-.07a2 2 0 012 1.7 117.46 117.46 0 010 28.62 2 2 0 01-2 1.72h-56.67a4.35 4.35 0 00-4.3 4.17 367.4 367.4 0 01-13.87 81.3 4.45 4.45 0 002.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.73 172.73 0 01-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94-1.72-1-4.89-2.77-6.65-3.76-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212.42 212.42 0 01-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15z" />
  </svg>
);

export const IconBrain = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 24 24"
    fill='currentColor'
    {...props}
  >
    <path d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45-.19.47-.58.84-1.06 1l-.79.25a1.687 1.687 0 01-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1-.5.15-1 .23-1.5.23-.88 0-1.76-.27-2.5-.79-.53.16-1.07.23-1.62.22-.79.01-1.57-.15-2.3-.45a4.105 4.105 0 01-2.43-3.61c-.08-.72.04-1.45.35-2.11-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7 1.6-1.5 4.05-1.66 5.83-.37.42-.11.86-.17 1.3-.17 1.36-.03 2.65.57 3.5 1.64 2.04.53 3.5 2.35 3.58 4.47.05 1.11-.25 2.2-.86 3.13.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 01-1 1h-.63c-.32.9-.88 1.69-1.62 2.29.25.09.51.14.77.21 5.13-.07 4.53-3.2 4.53-3.25a2.592 2.592 0 00-2.69-2.49 1 1 0 01-1-1 1 1 0 011-1c1.23.03 2.41.49 3.33 1.3.05-.29.08-.59.08-.89-.06-1.24-.62-2.32-2.87-2.53-1.25-2.96-4.4-1.32-4.4-.4-.03.23.21.72.25.75a1 1 0 011 1c0 .55-.45 1-1 1-.53-.02-1.03-.22-1.43-.56-.48.31-1.03.5-1.6.56-.57.05-1.04-.35-1.07-.9a.968.968 0 01.88-1.1c.16-.02.94-.14.94-.77 0-.66.25-1.29.68-1.79-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2 4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25.5.19.78.75.59 1.29-.19.52-.77.78-1.29.59-.73-.32-1.55-.34-2.3-.06-.32.27-.32.83-.32 1.27 0 .74.37 1.43 1 1.83.53.27 1.12.41 1.71.4-.15-.26-.28-.53-.39-.81a1.038 1.038 0 011.96-.68c.4 1.14 1.42 1.92 2.62 2.05 1.37-.07 2.59-.88 3.19-2.13.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3-.71.16 1 1.25.33-.11m-4.65-8.61a1 1 0 00-.91-1.03c-.71-.04-1.4.2-1.93.67-.57.58-.87 1.38-.84 2.19a1 1 0 001 1c.57 0 1-.45 1-1 0-.27.07-.54.23-.76.12-.1.27-.15.43-.15.55.03 1.02-.38 1.02-.92z" />
  </svg>
);

export const IconWand = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    height='1em'
    width='1em'
    role="presentation"
    viewBox="0 0 576 512"
    fill='currentColor'
    {...props}
  >
    <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1 14.1 37.7c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2l-37.7-14.1L263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5l-14.1 37.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0l381.3-381.4c18.7-18.7 18.7-49.1 0-67.9l-34.6-34.5c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
  </svg>
);

export const IconReset = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    aria-hidden="true"
    role='presentation'
    focusable='false'
    viewBox="0 0 21 21"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.578 6.487A8 8 0 112.5 10.5M7.5 6.5h-4v-4" />
    </g>
  </svg>
);

export const IconCommentDots = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M144 208c-17.7 0-32 14.2-32 31.1 0 18.6 14.3 32.9 32 32.9s31.1-14.25 31.1-32-13.3-32-31.1-32zm112-.9c-17.75 0-31.1 14.25-31.1 32s14.25 31.1 31.1 31.1 31.1-14.25 31.1-31.1-13.3-32-31.1-32zm112 .9c-17.75 0-31.1 14.25-31.1 32s14.25 32 31.1 32c17.75 0 31.99-14.25 31.99-32 .01-17.8-14.19-32-31.99-32zM256 31.1C114.6 31.1.9 124.22.9 239.1c0 47.62 19.91 91.25 52.91 126.3-14.87 39.5-45.87 72.88-46.37 73.25-6.624 7-8.373 17.25-4.624 26C5.818 474.2 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 28.87 9 60.16 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zm0 368.9c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29 7.374-12.12 14.37-25.75 19.87-40.25l10.62-28-20.62-21.87C69.81 314.1 48.06 282.2 48.06 240c0-88.25 93.24-160 207.1-160s207.1 71.75 207.1 160S370.8 400 256 400z" />
  </svg>
);

export const IconVoice = ({
  className,
  ...props
}: IconSvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M9 5a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c2.67 0 8 1.34 8 4v2H1v-2c0-2.66 5.33-4 8-4m7.76-9.64c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89l1.68-1.69M20.07 2c3.93 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74L20.07 2z" />
  </svg>
);