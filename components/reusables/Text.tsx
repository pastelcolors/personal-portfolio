// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { styled, StyleObject } from 'styletron-react';

interface IProps {
  style: StyleObject;
  value: string;
}

export const Text = React.memo(({ style, value }: IProps) => {
  const TextStyled = styled('pre', style);

  return (
    <TextStyled>
      {value}
    </TextStyled>
  );
});
