import React from 'react';
import './styles.css';
import { loginUrl } from '../../service/spotify';

export default () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* Login with Spotify button Logo */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};
