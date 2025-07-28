import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import {
  pretendard,
  blackhan,
  dacapo,
  snowfrost,
  santokki,
  lotteria,
  ryu,
} from './fonts';

export const metadata: Metadata = {
  title: 'CheriC',
  description:
    'Online Art Exhibition Platform for Expressing Personal Aesthetics Through Art Collecting',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/pwa/192x192.png',
    apple: '/icons/pwa/512x512.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={`
        ${pretendard.variable}
        ${blackhan.variable}
        ${dacapo.variable}
        ${snowfrost.variable}
        ${santokki.variable}
        ${lotteria.variable}
        ${ryu.variable}
      `}
    >
      <body className=" text-black font-primary overflow-x-hidden">
        <div className="flex justify-center">
          <div className="w-full min-h-screen overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
