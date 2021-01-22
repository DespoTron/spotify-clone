import React from 'react';
import './styles.css';
import { SidebarOption } from '../../components';
//import HomeIcon from '@material-ui/icons/Home';
//import SearchIcon from '@material-ui/icons/Search';
//import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../data/DataLayer';
import { HomeIcon, SearchIcon, LibraryMusicIcon } from '@material-ui/icons';

export default () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log('playlists:', playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};
