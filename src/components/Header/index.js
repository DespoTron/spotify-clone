import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

export default () => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs" type="text" />
      </div>

      <div className="header__right">
        <Avatar src="" alt="TD" />
        <h4>Thai Do</h4>
      </div>
    </div>
  );
};
