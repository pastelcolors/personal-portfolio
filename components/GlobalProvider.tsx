// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { Provider as StyletronProvider } from 'styletron-react';

// ANCHOR Utilities
import { debug, styletron } from '../utils/styletron';

// ANCHOR Providers
// import { PROVIDERS } from './utils/Providers';

// ANCHOR Utils
// import { Compose } from './utils/Compose';

interface IGlobalProviderProps {
  children?: React.ReactNode;
}

export function GlobalProvider({ children }: IGlobalProviderProps) {
  return (
    <StyletronProvider
      value={styletron}
      debug={debug}
      debugAfterHydration
    >
      {children}
    </StyletronProvider>
  );
}
