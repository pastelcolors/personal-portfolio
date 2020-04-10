// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { styled, StyleObject } from 'styletron-react';

interface IProps {
  style?: StyleObject;
  children?: React.ReactNode;
}

export const DivParent = React.memo(({ style, children }: IProps) => {
  const DivStyled = style ? styled('div', style) : React.memo(() => <div>{children}</div>);

  return (
    <DivStyled>
      {children}
    </DivStyled>
  );
});
