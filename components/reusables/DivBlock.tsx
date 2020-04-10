// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { styled, StyleObject } from 'styletron-react';

interface IProps {
  style?: StyleObject;
}

export const DivBlock = React.memo(({ style }: IProps) => {
  const DivBlockStyled = style ? styled('div', style) : React.memo(() => <div />);

  return (
    <DivBlockStyled />
  );
});
