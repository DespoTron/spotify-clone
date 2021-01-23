import { useDataLayerValue } from 'data/DataLayer';
import React from 'react';
import './styles.css';

export default ({ title, Icon }) => {
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id, e) => {
    dispatch({
      type: 'SET_CURRENT_PLAYLISTS',
      id: id,
    });

    spotify.getPlaylistTracks(id).then((response) => {
      dispatch({
        type: 'SET_TRACKS',
        tracks: response,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={(e) => changePlaylist(id, e)}>{title}</p>
      )}
    </div>
  );
};
