import React from 'react';
import './styles.css';
import { Sidebar, Body, Footer } from '../../components';

export default ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};
