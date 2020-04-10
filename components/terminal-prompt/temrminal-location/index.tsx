// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { Text } from './node_modules/components/reusables/Text';

// ANCHOR Styles
import { HOSTNAME } from './styles';

interface IProps {
  hostName: string;
}

export const TerminalHostname = React.memo(({ hostName }: IProps) => (
  <Text style={HOSTNAME} value={hostName} />
));
