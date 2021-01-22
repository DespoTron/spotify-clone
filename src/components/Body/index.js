import React from 'react';
import './styles.css';
import { Header, SongRow } from '../../components';
import { useDataLayerValue } from 'data/DataLayer';
//import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  PlayCircleFilledIcon,
  FavoriteIcon,
  MoreHorizIcon,
} from '@material-ui/icons';

export default ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcSu9RzgfqQF1`,
      })
      .then((response) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: 'SET_ITEM',
            item: res.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((response) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: 'SET_ITEM',
            item: res.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onclick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};
