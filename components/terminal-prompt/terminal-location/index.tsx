// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { Text } from 'components/reusables/Text';

// ANCHOR Styles
import { LOCATION } from './styles';

export const TerminalLocation = React.memo(() => (
  <Text style={LOCATION} value="~" />
));
