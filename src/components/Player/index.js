import React from 'react';
import './styles.css';
import { Sidebar, Body } from '../../components';

export default ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
        {/* Sidebar */}
        {/* Body */}
      </div>

      {/* Footer */}
    </div>
  );
};
