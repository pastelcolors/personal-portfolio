// ANCHOR Styletron
import { StyleObject } from 'styletron-react';

// ANCHOR Theme
import { THEME } from 'utils/theme';

export const INPUT: StyleObject = {
  flex: '0 1 auto',
  color: '#FFFFFF',
  outline: '0px solid transparent',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  wordBreak: 'break-all',
  whiteSpace: 'normal',
  fontFamily: THEME.typography.font200.fontFamily,
  fontSize: THEME.typography.font200.fontSize,
  fontWeight: THEME.typography.font200.fontWeight as StyleObject['fontWeight'],
};
