// ANCHOR React
import * as React from 'react';

// ANCHOR  Page Components
import { FacebookOpenGraph } from 'components/head/FacebookOpenGraph';
import { AppHead } from 'components/head/AppHead';
import { Home } from 'components/home';

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <>
    <AppHead title="Adrian Dayrit" description="">
      <FacebookOpenGraph
        url="https://adriandayrit.me"
        title="Adrian Dayrit"
        description=""
        width="1366"
        height="768"
        image=""
      />
    </AppHead>
    <Home />
  </>
));
