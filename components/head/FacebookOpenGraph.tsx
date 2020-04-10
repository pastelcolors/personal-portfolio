import * as React from 'react';

export interface IFacebookOpenGraphProps {
  url: string;
  title: string;
  image: string;
  description: string;
  width: string;
  height: string;
}

export function FacebookOpenGraph(
  {
    url, title, image, description, width, height,
  }: IFacebookOpenGraphProps,
) {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Adrian Dayrit" />
      <meta property="og:locale" content="en_PH" />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
    </>
  );
}
