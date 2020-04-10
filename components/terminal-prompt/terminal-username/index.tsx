// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { Text } from 'components/reusables/Text';

// ANCHOR Styles
import { USERNAME } from './styles';

interface IProps {
  userName: string;
}

export const TerminalUsername = React.memo(({ userName }: IProps) => (
  <Text style={USERNAME} value={userName} />
));
