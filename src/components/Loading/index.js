/* eslint-disable linebreak-style */
import React from 'react';

import './styles.css';

export default function LoadingScreen() {
  return (
    <div className="splash">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
