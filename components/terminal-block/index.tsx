// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { TerminalPrompt } from 'components/terminal-prompt';
import { TerminalInput } from 'components/terminal-input';
import { Block } from 'components/reusables/Section';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  userName: string;
  hostName: string;
}

export const TerminalBlock = React.memo(({ userName, hostName }: IProps) => (
  <>
    <Block style={BLOCK}>
      <TerminalPrompt userName={userName} hostName={hostName} />
      <TerminalInput />
    </Block>
  </>
));
