import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../styles/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const blackhan = localFont({
  src: '../styles/fonts/BlackHanSans-Regular.woff2',
  variable: '--font-blackhan',
  display: 'swap',
});

export const dacapo = localFont({
  src: '../styles/fonts/MapoDacapo.woff2',
  variable: '--font-dacapo',
  display: 'swap',
});

export const snowfrost = localFont({
  src: '../styles/fonts/SF_HambakSnow.woff2',
  variable: '--font-snowfrost',
  display: 'swap',
});

export const santokki = localFont({
  src: '../styles/fonts/HSSanTokki20-Regular.woff2',
  variable: '--font-santokki',
  display: 'swap',
});

export const lotteria = localFont({
  src: '../styles/fonts/LOTTERIACHAB.woff2',
  variable: '--font-lotteria',
  display: 'swap',
});

export const ryu = localFont({
  src: '../styles/fonts/Ownglyph_ryurue-Rg.woff2',
  variable: '--font-ryu',
  display: 'swap',
});
