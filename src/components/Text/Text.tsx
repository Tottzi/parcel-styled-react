import React from 'react';
import { CSSProp, css } from 'styled-components';

const Text = ({ inputCss }: { inputCss: CSSProp }) => {
  return (
    <span
      css={[
        inputCss,
        css`
          background-color: white;
          color: red;
        `,
      ]}
    >
      Bob
    </span>
  );
};

export default Text;
