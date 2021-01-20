import React from 'react';
import './styles.css';

export default ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
};
