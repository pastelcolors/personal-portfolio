// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { useStyletron, StyleObject } from 'styletron-react';

import { styletron } from '../../utils/styletron';

interface IProps {
  style: StyleObject;
}

const blinkAnimation = styletron.renderKeyframes({
  from: {
    opacity: 0.0,
  },
  to: {
    opacity: 1.0,
  },
});


export const Input = React.forwardRef(({ style }: IProps, ref) => {
  const [css] = useStyletron();

  const inputRef: any = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <>
      <div
        ref={inputRef}
        contentEditable="true"
        className={css({
          margin: '0px',
          caretColor: 'transparent',
          '::after': {
            content: '"_"',
            display: 'inline-block',
            marginTop: 'auto',
            verticalAlign: 'top',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationName: blinkAnimation,
          },
          '&:focus': {
            outline: 'none',
          },
          ...style,
        })}
      />
    </>
  );
});
