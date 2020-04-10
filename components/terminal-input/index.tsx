// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { Input } from 'components/reusables/Input';

// ANCHOR Hooks
import { useIsomorphicEffect } from 'utils/hooks/useIsomorphicEffect';

// ANCHOR Style
import { INPUT } from './styles';

export const TerminalInput = React.memo(() => {
  const inputRef = React.useRef<HTMLDivElement | null>(null);

  useIsomorphicEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return undefined;
  }, [inputRef]);

  return (
    <Input ref={inputRef} style={INPUT} />
  );
});
