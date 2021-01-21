import React from 'react';
import './styles.css';
import { Header } from '../../components';
import { useDataLayerValue } from 'DataLayer';

export default ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

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
    </div>
  );
};
