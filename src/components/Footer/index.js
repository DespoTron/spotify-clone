import React, { useEffect } from 'react';
import './styles.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from 'data/DataLayer';
import { useSoundLayerValue } from 'data/SoundLayer';

export default ({ spotify }) => {
  const [{ track, tracks }, dispatch] = useDataLayerValue();
  const [
    { audio, playing, volume, repeat, shuffle },
    soundDispatch,
  ] = useSoundLayerValue();

  const startPlaying = () => {
    soundDispatch({
      type: 'SET_PLAYING',
      playing: true,
    });
    soundDispatch({
      type: 'SET_VOLUME',
      volume: volume / 100,
    });
  };

  const stopPlaying = () => {
    soundDispatch({
      type: 'STOP_PLAYING',
      playing: false,
    });
  };

  const setRepeat = () => {
    if (!repeat && shuffle) {
      setShuffle();
    }
    soundDispatch({
      type: 'SET_REPEAT',
      repeat: !repeat,
    });
  };

  const setShuffle = () => {
    if (!shuffle && repeat) {
      setRepeat();
    }
    soundDispatch({
      type: 'SET_SHUFFLE',
      shuffle: !shuffle,
    });
  };

  const handleChange = (event, value) => {
    soundDispatch({
      type: 'SET_VOLUME',
      volume: volume / 100,
    });
  };

  if (audio) {
    audio.onended = () => {
      if (shuffle) {
        while (true) {
          let randomTrackNumber = Math.floor(
            Math.random() * tracks.items.length
          );
          let randomTrack = tracks.items[randomTrackNumber].track;
          if (track !== randomTrack) {
            dispatch({
              type: 'SET_TRACK',
              track: randomTrack,
            });

            let wasPlaying = playing;
            soundDispatch({
              type: 'SET_PLAYING',
              playing: false,
            });

            let audio = new Audio(randomTrack.preview_url);
            audio.loop = repeat;
            soundDispatch({
              type: 'SET_AUDIO',
              audio: audio,
            });

            if (wasPlaying) {
              soundDispatch({
                type: 'SET_PLAYING',
                playing: true,
              });
            }

            document.title = `${randomTrack.name} · ${randomTrack.artists
              .map((artist) => artist.name)
              .join(', ')}`;
            break;
          }
        }
      }
      if (!shuffle && !repeat) {
        soundDispatch({
          type: 'SET_PLAYING',
          playing: false,
        });
      }
    };
  }

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={track ? track.album.images[0].url : ''}
          alt=""
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer_icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
