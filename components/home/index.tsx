// ANCHOR React
import * as React from 'react';

// ANCHOR Terminal in React
import { Layout } from 'components/base/Layout';

import { TerminalBlock } from 'components/terminal-block';

export const Home = React.memo(() => (
  <Layout>
    <TerminalBlock userName="adriandayrit" hostName="lyon-software-technologies" />
  </Layout>
));
