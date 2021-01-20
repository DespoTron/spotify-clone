import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './service/spotify';
import './App.css';
import { Login, Player } from './components';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      // gives the access token to the spotify api
      // so we can communicate back and forth between
      // spotify and our React app
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }

    console.log('I HAVE A TOKEN -> ', token);
  }, []);

  console.log('HELLO USER', user);
  console.log('HELLO TOKEN', token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
