// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { styled, StyleObject } from 'styletron-react';

interface IProps {
  style: StyleObject;
  children: React.ReactNode;
}

export const Section = React.memo(({ style, children }: IProps) => {
  const SectionStyled = styled('section', style);

  return (
    <SectionStyled>
      {children}
    </SectionStyled>
  );
});
