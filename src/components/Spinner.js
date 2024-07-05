// Spinner.js
import React from 'react';
import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';

const override = css`
  display: block;
  border-color: red;
  z-index: 1000;
`;

const spinnerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // Set minimum height to fill the entire viewport vertically
};

const Spinner = () => {
  return (
    <div style={spinnerContainerStyle}>
      <div className="sweet-loading">
        <SyncLoader color={'#36D7B7'} loading={true} css={override} size={20} />
      </div>
    </div>
  );
};

export default Spinner;
