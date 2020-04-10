// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { DivParent } from 'components/reusables/DivParent';
import { Text } from 'components/reusables/Text';
import { TerminalHostname } from './terminal-hostname';
import { TerminalLocation } from './terminal-location';
import { TerminalUsername } from './terminal-username';

// ANCHOR Styles
import { MISC, BLOCK } from './styles';

interface IProps {
  userName: string;
  hostName: string;
}

export const TerminalPrompt = React.memo(({ userName, hostName }: IProps) => (
  <DivParent style={BLOCK}>
    <TerminalUsername userName={userName} />
    <Text value="@" style={MISC} />
    <TerminalHostname hostName={hostName} />
    <Text value=":" style={MISC} />
    <TerminalLocation />
    <Text value="$" style={MISC} />
  </DivParent>
));
