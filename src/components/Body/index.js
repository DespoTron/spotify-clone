import React from 'react';
import './styles.css';
import { Header } from '../../components';

export default ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
    </div>
  );
};
