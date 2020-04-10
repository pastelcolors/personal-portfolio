// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { useStyletron, StyleObject } from 'styletron-react';

interface IProps {
  style: StyleObject;
  value: string;
}

export const Text = React.memo(({ style, value }: IProps) => {
  const [css] = useStyletron();

  return (
    <pre className={css({ margin: '0px', ...style })}>
      {value}
    </pre>
  );
});
