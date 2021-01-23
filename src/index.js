import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useDataLayerValue } from './data/DataLayer';
import { useSoundLayerValue } from './data/SoundLayer';
import reducer, { initialState } from './data/reducer';
import soundReducer, { soundInitialState } from './data/soundReducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
