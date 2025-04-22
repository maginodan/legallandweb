/* prettier-ignore-start */
/* eslint-disable max-len */
// @ts-nocheck
// This file uses LF line endings (\n) to comply with Prettier
import { tw, css } from 'twind/css';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import Button from '@/components/button';

// Lazy-load SVGs to optimize page loading
const Netlify = dynamic(() => import('@/constants/svg/netlify.svg'), { ssr: false });
const Nike = dynamic(() => import('@/constants/svg/nike.svg'), { ssr: false });
const Figma = dynamic(() => import('@/constants/svg/figma.svg'), { ssr: false });
const Aws = dynamic(() => import('@/constants/svg/aws.svg'), { ssr: false });

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header: FC = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`
        )}
      >
        Navigate Uganda’s Land Laws with Ease
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Instant AI-powered guidance on land titles, tenure, and disputes, tailored for Uganda.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <a href="https://huggingface.co/spaces/maginodan/LegalLand-Assistant">
          <Button primary>Start Now</Button>
        </a>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Learn More</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p
          className={tw(
            `font-mono uppercase text-center font-medium text-sm text-gray-600`
          )}
        >
          Trusted by Leading Partners
        </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`mx-4 my-2`)} width={100} />
          <Netlify className={tw(`mx-4 my-2`)} width={100} />
          <Nike className={tw(`mx-4 my-2`)} width={100} />
          <Figma className={tw(`mx-4 my-2`)} width={100} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
/* prettier-ignore-end */
