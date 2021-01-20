import React, { useEffect, useState } from 'react'
import { getTokenFromUrl } from './service/spotify'
import './App.css'
import { Login, Player } from './components'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)

      // gives the access token to the spotify api
      // so we can communicate back and forth between
      // spotify and our React app
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        console.log('PERSON', user)
      })
    }

    console.log('I HAVE A TOKEN -> ', token)
  }, [])

  return (
    // BEM
    <div className="app">{token ? <Player /> : <Login />}</div>
  )
}

export default App
