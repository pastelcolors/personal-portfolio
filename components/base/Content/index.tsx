// ANCHOR React library
import * as React from 'react';

// ANCHOR Styletron
import { styled } from 'styletron-react';

// ANCHOR Styles
import { BASE_CONTENT } from './styles';

interface IBaseProps {
  children?: React.ReactNode;
}

/**
 * Base component of all pages
 *
 * Used for layout definition
 */
export function Content({ children }: IBaseProps) {
  const ContentStyled = styled('div', BASE_CONTENT);

  return (
    <ContentStyled>
      {children}
    </ContentStyled>
  );
}
