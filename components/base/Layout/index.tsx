// ANCHOR React library
import * as React from 'react';

// ANCHOR Styletron
import { styled } from 'styletron-react';

// ANCHOR Styles
import { BASE_LAYOUT } from './styles';

interface IBaseProps {
  children?: React.ReactNode;
}

/**
 * Base component of all pages
 *
 * Used for layout definition
 */
export function Layout({ children }: IBaseProps) {
  const LayoutStyled = styled('div', BASE_LAYOUT);

  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
}
