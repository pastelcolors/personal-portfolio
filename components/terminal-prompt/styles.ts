// ANCHOR Styletron
import { StyleObject } from 'styletron-react';

// ANCHOR Theme
import { THEME } from 'utils/theme';

export const MISC: StyleObject = {
  color: '#FFFFFF',
  fontFamily: THEME.typography.font200.fontFamily,
  fontSize: THEME.typography.font200.fontSize,
  fontWeight: THEME.typography.font200.fontWeight as StyleObject['fontWeight'],
};
