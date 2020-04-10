// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { Text } from 'components/reusables/Text';
import { TerminalUsername } from './terminal-username';
import { TerminalHostname } from './terminal-hostname';

// ANCHOR Styles
import { MISC } from './styles';
import { TerminalLocation } from './terminal-location';

interface IProps {
  userName: string;
  hostName: string;
}

export const TerminalPrompt = React.memo(({ userName, hostName }: IProps) => (
  <>
    <TerminalUsername userName={userName} />
    <Text value="@" style={MISC} />
    <TerminalHostname hostName={hostName} />
    <Text value=":" style={MISC} />
    <TerminalLocation />
    <Text value="$" style={MISC} />
  </>
));
