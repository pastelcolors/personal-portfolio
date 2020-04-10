// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Head from 'next/head';

export interface IProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function AppHead({ title, description, children }: IProps) {
  return (
    <Head>
      {/* Viewport for responsive web design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      {/* Document Title */}
      <title>{title}</title>
      {/* Meta Description */}
      <meta name="description" content={description} />
      <meta name="theme-color" content="#5B36C9" />
      {/* Fira Code */}
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="./fonts/fira-code-v8-latin-regular.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="./fonts/fira-code-v8-latin-700.woff2"
        crossOrigin="anonymous"
      />
      <link
        href="./font.css"
        rel="stylesheet"
      />
      {/* Web Manifest */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      {children}
    </Head>
  );
}
